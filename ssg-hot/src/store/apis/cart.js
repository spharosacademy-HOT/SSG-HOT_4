import { apiClient } from "./apiClient";

//장바구니 목록 가져오기
export const getMyCart = async () => {
  const res = await apiClient.get(`/carts/users/user`);
  return res.data;
};

//장바구니 수량 변경하기
export const changeCartCnt = async () => {
  const res = await apiClient.put(`/carts/count`);
  return res;
};

//장바구니 옵션 변경하기
export const changeCartOption = async () => {
  const res = await apiClient.put(`/carts/stock`);
  return res;
};

//장바구니 넣기
export const addMyCart = async (id, count) => {
  const res = await apiClient.post(`/carts`, { id, count });
  return res;
};

//장바구니 삭제
export const deleteCart = async () => {
  const res = await apiClient.delete(`/carts`);
  return res;
};
