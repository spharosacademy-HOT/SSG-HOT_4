import { apiClient } from "./apiClient";

//유저 정보 상세 조회
export const getUserDetail = async () => {
  const res = await apiClient.get(`users/user`);
  return res.data;
};
