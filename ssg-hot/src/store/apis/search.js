import { basicApiClient } from "./apiClient";

//검색하기
export const getSearch = async (name) => {
  const res = await basicApiClient.get(`/product/search?name=${name}`);
  return res.data.content;
};
