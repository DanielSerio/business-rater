import { QueryClient } from "@tanstack/react-query";
import axios, { type AxiosInterceptorManager, type AxiosResponse } from "axios";

function initQueryClient() {
  const QUERY_CLIENT = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  return {
    QUERY_CLIENT,
  };
}

export const { QUERY_CLIENT } = initQueryClient();
const axiosInstance = axios.create({
  baseURL: `http://localhost:3000`,
  headers: {
    "Content-Type": "application/json",
    "X-Authorization": "",
    "X-Refresh": "",
  },
});

type InterceptorParams = Parameters<AxiosInterceptorManager<any>["use"]>;
type SuccessInterceptor = InterceptorParams[0];
type ErrorInterceptor = InterceptorParams[1];

const onNewRequest: SuccessInterceptor = (config) => {
  return config;
};

const onNewRequestError: ErrorInterceptor = (error) => {
  return Promise.reject(error);
};

const onNewResponse = async (response: AxiosResponse) => {
  const headers = await response.headers;
  const auth = headers["x-authorization"];

  if (auth) {
    const token = auth.replace(/^bearer\s+/, "");
    const urt = headers["x-refresh"];

    localStorage.setItem("uat", token);
    localStorage.setItem("urt", urt);
  }

  if (response.status === 401) {
    const refresh = localStorage.getItem("urt");
    const refreshResponse = await http.post("/auth/refresh", {
      refreshToken: refresh,
    });

    if (refreshResponse.status === 403) {
      localStorage.removeItem("uat");
      localStorage.removeItem("urt");

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
        response.headers["x-refresh"] = urt;
      }
    }

    return http(response);
  }

  return response;
};

const onNewResponseError: ErrorInterceptor = (error) => {
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(onNewRequest, onNewRequestError);
axiosInstance.interceptors.response.use(onNewResponse, onNewResponseError);

export const http = axiosInstance;
