import { apiClient } from "./apiClient";

// qna 작성하기
export const postQna = async (qnaData)=> {
    const res = await apiClient.post(`/qna`,qnaData)
    return res;
}