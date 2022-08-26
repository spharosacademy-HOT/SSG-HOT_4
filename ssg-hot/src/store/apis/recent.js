import { apiClient } from "./apiClient";

//최근본아이템 포스트 요청
export const postRecent = async (recentData) => {
  const res = await apiClient.post(`/recentlyviewedproduct`, recentData);
  return res;
};

//최근본아이템 가져오기
export const getRecent = async () => {
  const res = await apiClient.get(`/recentlyviewedproduct`);
  return res.data;
};

//최근본아이템 삭제하기
export const deleteRecent = async (recentData, id) => {
  const res = await apiClient.put(`/recentlyviewedproduct/${id}`, recentData);
};
