import axios from "axios";
import { getToken, isExistToken } from "../utils/useful-funtions";

//baseurl
export const baseURL = "https://ssghot.shop/api/api";
// export const baseURL = "http://localhost:8080/api";

const checkToken = () => {
  if (isExistToken()) {
    return `Bearer ${getToken()}`;
  }
  return ``;
};
// 로컬에서 토큰 가져오기
let ACCESS_TOKEN = checkToken();
// console.log(ACCESS_TOKEN);

//토큰 필요 없는 json 타입 요청시
export const basicApiClient = axios.create({
  baseURL: baseURL,
  headers: { "Content-type": "application/json", Authorization: ACCESS_TOKEN },
});

//토큰 필요 없는 멀티타입 요청시
export const basicFileApiClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "multipart/form-data",
    Authorization: ACCESS_TOKEN,
  },
});

// //json 타입 요청시
export const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
    Authorization: ACCESS_TOKEN,
  },
});

// //멀티타입 요청시(이미지 파일)
export const fileApiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: ACCESS_TOKEN,
    "Content-type": "multipart/form-data",
  },
});
