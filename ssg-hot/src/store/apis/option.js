import { basicApiClient } from "./apiClient";

//1 옵션으로 2조회
export const getOption1 = async (id) => {
  const res = await basicApiClient.get(`/option1/option2/${id}`);
  return res;
};

///2옵션으로 1조회?
export const getOption2 = async (id) => {
  const res = await basicApiClient.get(`/option2/option1/${id}`);
  return res;
};
