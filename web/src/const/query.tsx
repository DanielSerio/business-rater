import { QueryClient } from "@tanstack/react-query";
import axios, { type AxiosInterceptorManager, type AxiosResponse } from "axios";

function initQueryClient() {
  const QUERY_CLIENT = new QueryClient({
    defaultOptions: {
      queries: {
        structuralSharing: false,
      },
    },
  });

  QUERY_CLIENT.resetQueries();

  return {
    QUERY_CLIENT,
  };
}

export const { QUERY_CLIENT } = initQueryClient();
function create() {
  const axiosInstance = axios.create({
    baseURL: `http://localhost:3000`,
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": "",
      "X-Refresh": "",
    },
    timeout: 3000,
  });

  type InterceptorParams = Parameters<AxiosInterceptorManager<any>["use"]>;
  type SuccessInterceptor = InterceptorParams[0];
  type ErrorInterceptor = InterceptorParams[1];

  const onNewRequest: SuccessInterceptor = (config) => {
    const storedAccessToken = (localStorage?.getItem("uat") ?? "").replace(
      /^bearer\s+/i,
      ""
    );

    if (storedAccessToken) {
      config.headers["authorization"] = `Bearer ${storedAccessToken}`;
    }

    return config;
  };

  const onNewRequestError: ErrorInterceptor = (error) => {
    return Promise.reject(error);
  };

  const { resolve, reject } = Promise.withResolvers();

  const onNewResponse = async (response: AxiosResponse) => {
    const headers = await response.headers;
    const auth = headers["x-authorization"];

    if (auth && response.status !== 401 && response.status !== 403) {
      const token = auth.replace(/^bearer\s+/, "");
      const urt = headers["x-refresh"];

      localStorage.setItem("uat", token);
      localStorage.setItem("urt", urt);

      return response;
    }

    if (response.status === 403) {
      localStorage.removeItem("uat");
      localStorage.removeItem("urt");

      console.error("Response 403 removed storage");
      reject(`Refresh token rejected: ${response.data?.message ?? ""}`);
    }

    resolve(response.data);

    return response;
  };

  const onNewResponseError: ErrorInterceptor = async (error) => {
    const response = error.response;

    console.error(error);

    if (response.status === 401) {
      const refresh = localStorage.getItem("urt");
      const refreshResponse = await axiosInstance.post("/auth/refresh", {
        refreshToken: refresh,
      });

      console.error("Response 401");

      if (refreshResponse.status === 403) {
        return refreshResponse;
      } else {
        const headers = await refreshResponse.headers;
        const auth = headers["x-authorization"];

        if (auth) {
          const token = auth.replace(/^bearer\s+/, "");
          const urt = headers["x-refresh"];

          localStorage.setItem("uat", token);
          localStorage.setItem("urt", urt);

          response.headers["x-authorization"] = `Bearer ${token}`;
          response.config.headers["x-authorization"] = `Bearer ${token}`;
          response.headers["x-refresh"] = urt;
          response.config.headers["x-refresh"] = urt;
        }
      }
      const result = await axiosInstance(response);
      reject(result);
    }
    return Promise.reject(error);
  };

  axiosInstance.interceptors.request.use(onNewRequest, onNewRequestError);
  axiosInstance.interceptors.response.use(onNewResponse, onNewResponseError);

  return axiosInstance;
}

export const getHttp = create;
