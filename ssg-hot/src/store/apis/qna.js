import { apiClient } from "./apiClient";
import * as Api from "./address";
// qna 작성하기
export const postQna = async (qnaData) => {
  const res = await apiClient.post(`/qna`, qnaData);
  // const res = await Api.post(`/qna`, qnaData);
  return res;
};

//상품별 qna 가져오기
export const getQna = async (id) => {
  const res = await apiClient.get(`qna/product/${id}`);
  return res;
};

// qna 지우기
export const deleteQna = async (id) => {
  const res = await apiClient.delete(`qna/${id}`);
  return res;
}
