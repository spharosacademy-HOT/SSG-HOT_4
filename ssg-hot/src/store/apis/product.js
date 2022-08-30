import { basicApiClient } from "./apiClient";

// 상품 디테일 조회
export const getProduct = async (id) => {
  const res = await basicApiClient.get(`/product/${id}`);
  return res.data;
};
