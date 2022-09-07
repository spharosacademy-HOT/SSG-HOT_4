import { apiClient, basicApiClient } from "./apiClient";

//1 옵션으로 2조회
export const getOption1 = async (id, productId) => {
  const res = await basicApiClient.get(
    `/option1/option2/simple/${id}/${productId}`
  );
  return res;
};

///2옵션으로 1조회?
export const getOption2 = async (id, productId) => {
  const res = await basicApiClient.get(
    `/option2/option1/simple/${id}/${productId}`
  );
  return res;
};

//옵션 변경
export const putOption = async (optionData) => {
  const res = await apiClient.put(`/carts/stock/v2`, optionData);
  return res.data;
};
