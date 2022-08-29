import { apiClient } from "./apiClient";
import * as Api from "./address";
//내 위시리스트 가져오기
export const getLike = async () => {
  // const res = await apiClient.get(`/wish/user`);
  const res = await Api.get(`/wish/user`);
  return res.data;
};

//위시리스트 담기
export const postLike = async (productId) => {
  console.log(productId);
  const res = await apiClient.post(`/wish`, { productId: productId });
  return res.data;
};

//위시리스트 삭제
export const deleteLike = async (id) => {
  const res = await apiClient.delete(`/wish/${id}`);
  return res;
};
