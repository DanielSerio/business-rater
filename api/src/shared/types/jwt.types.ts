export interface RefreshPayloadParams {
  sub: string;
  eml: string;
}

export interface SessionPayloadParams extends RefreshPayloadParams {
  unm: string | null;
  rol: 'USER' | 'ADMIN';
  img: number | null;
}

export interface RefreshPayload extends RefreshPayloadParams {
  iat: number;
  exp: number;
}

export interface SessionPayload extends SessionPayloadParams {
  iat: number;
  exp: number;
}