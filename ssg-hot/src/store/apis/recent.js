import { apiClient, basicApiClient } from "./apiClient";

//최근본아이템 포스트 요청
export const postRecent = async (recentData) => {
  const res = await apiClient.post(`/recentlyviewedproduct`, recentData);
  return res;
};

//최근본아이템 가져오기
export const getRecent = async () => {
  const res = await apiClient.get(
    `/recentlyviewedproduct?sort=id,desc&isDeleted=N`
  );
  return res.data;
};

//최근본아이템 삭제하기
export const deleteRecent = async (recentData, id) => {
  const res = await apiClient.put(`/recentlyviewedproduct/${id}`, recentData);
};

//최근 검색어 등록
export const postRecentSearch = async (recentData) => {
  const res = await apiClient.post(`/searchkeyword`, recentData);
  return res;
};

//최근 검색어 가져오기
export const getRecentSearch = async () => {
  const res = await apiClient.get(`/searchkeyword`);
  return res;
};

//최근 검색어 삭제
export const deleteRecentSearch = async (id) => {
  const res = await apiClient.delete(`/searchkeyword/${id}`);
  return res;
};
