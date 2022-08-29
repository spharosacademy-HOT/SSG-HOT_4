import { apiClient } from "./apiClient";
import  * as Api from "../apis/address"
//유저 정보 상세 조회
export const getUserDetail = async () => {
  const res = await Api.get(`/users/user`);
  return res.data;
};
