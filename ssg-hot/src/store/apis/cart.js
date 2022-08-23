import { apiClient } from "./apiClient";

//장바구니 목록 가져오기
export const getMyCart = async () => {
  const res = await apiClient.get(`/api/cart`);
  return res.data;
};
