import axios from "axios";
//baseurl
export const baseURL = "http://10.10.10.125:8080/ssghot";
// 로컬에서 토큰 가져오기
// const ACCESS_TOKEN = localStorage.getItem("token");

//토큰 필요 없는 json 타입 요청시
export const basicApiClient = axios.create({
  baseURL: { baseURL },
  headers: { "Content-type": "application/json" },
});

//토큰 필요 없는 멀티타입 요청시
export const basicFileApiClient = axios.create({
  baseURL: { baseURL },
  headers: { "Content-type": "multipart/form-data" },
});

//json 타입 요청시
export const apiClient = axios.create({
  baseURL: { baseURL },
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

//멀티타입 요청시(이미지 파일)
export const fileApiClient = axios.create({
  baseURL: { baseURL },
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-type": "multipart/form-data",
  },
});
