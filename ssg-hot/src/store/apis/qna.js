import { apiClient } from "./apiClient";
import * as Api from "./address";
// qna 작성하기
export const postQna = async (qnaData) => {
  // const res = await apiClient.post(`/qna`,qnaData)
  const res = await Api.post(`/qna`, qnaData);
  return res;
};
