export const API_BASE_URL = "http://localhost:8080";
export const ACCESS_TOKEN = "accessToken";

export const OAUTH2_REDIRECT_URI = "http://localhost:3000/oauth2/redirect";
export const RESPONSE = "&response_type=code";
export const GOOGLE_AUTH_URL =
  API_BASE_URL +
  "/oauth2/authorize/google?redirect_uri=" +
  OAUTH2_REDIRECT_URI +
  "&response_type=code";
export const NAVER_AUTH_URL =
  API_BASE_URL +
  "/oauth2/authorize/naver?redirect_uri=" +
  OAUTH2_REDIRECT_URI +
  "&response_type=code";

export const KAKAO_AUTH_URL =
  API_BASE_URL +
  "/oauth2/authorize/kakao?redirect_uri=" +
  OAUTH2_REDIRECT_URI +
  "&response_type=code";

export const GOOGLE_AUTH =
  API_BASE_URL +
  "/oauth2/authorize/google?redirect_uri=" +
  OAUTH2_REDIRECT_URI +
  "&response_type=code";
