import { apiClient, baseURL } from "./apiClient";
import axios from "axios";
import { getToken, isExistToken } from "../utils/useful-funtions";

const checkToken = () => {
  if (isExistToken()) {
    return `Bearer ${getToken()}`;
  }
  return ``;
};
let ACCESS_TOKEN = checkToken();
// 주소 추가하기
export const addAddress = async (myAddress) => {
  const res = await apiClient.post(`/address`, myAddress);
  return res;
};

//주소 가져오기
export const getAddress = async () => {
  const res = await apiClient.get(`/address/users`);
  return res;
};

//주소 수정하기
export const putAddress = async (myAddress) => {
  const res = await apiClient.get(`/address`, myAddress);
  return res;
};

export const deleteAddress = async (id) => {
  const res = await apiClient.delete(`/address/${id}`);
  return res;
};
/// test

const baseUrl = baseURL;

async function get(endpoint) {
  console.log(checkToken());
  return axios.get(baseUrl + endpoint, {
    // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
    headers: {
      "Content-Type": "application/json",
      Authorization: ACCESS_TOKEN,
    },
  });
}

async function post(endpoint, data) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  // 예시: {name: "Kim"} => {"name": "Kim"}
  const bodyData = JSON.stringify(data);

  return axios.post(baseUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: ACCESS_TOKEN,
    },
  });
}

async function put(endpoint, data) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  // 예시: {name: "Kim"} => {"name": "Kim"}
  const bodyData = JSON.stringify(data);

  return axios.put(baseUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: ACCESS_TOKEN,
    },
  });
}

async function patch(endpoint, data) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  // 예시: {name: "Kim"} => {"name": "Kim"}
  const bodyData = JSON.stringify(data);

  return axios.patch(baseUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: ACCESS_TOKEN,
    },
  });
}

// 아래 함수명에 관해, delete 단어는 자바스크립트의 reserved 단어이기에,
// 여기서는 우선 delete 대신 del로 쓰고 아래 export 시에 delete로 alias 함.
async function del(endpoint) {
  return axios.delete(baseUrl + endpoint, {
    headers: {
      Authorization: ACCESS_TOKEN,
    },
  });
}

async function postImg(endpoint, formdata) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  // 예시: {name: "Kim"} => {"name": "Kim"}
  // const bodyData = JSON.stringify(data);

  return axios.post(baseUrl + endpoint, formdata, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

// 아래처럼 export한 후, import * as A 방식으로 가져오면,
// A.get, A.post 로 쓸 수 있음.
export { get, post, put, patch, del as delete, postImg };
