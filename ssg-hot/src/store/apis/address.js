import { apiClient } from "./apiClient";

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
