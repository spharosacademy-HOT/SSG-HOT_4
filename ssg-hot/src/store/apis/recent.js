import { apiClient, basicApiClient } from "./apiClient";

//최근본아이템 포스트 요청
export const postRecent = async (productId) => {
  const res = await apiClient.post(`/recentlyviewedproduct`, {
    productId: productId,
  });
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
export const deleteRecent = async (productId, id) => {
  const res = await apiClient.delete(`/recentlyviewedproduct/${id}`, {
    productId: productId,
  });
};

//최근 검색어 등록
export const postRecentSearch = async (recentData) => {
  const res = await apiClient.post(`/searchkeyword`, recentData);
  return res;
};

//최근 검색어 가져오기
export const getRecentSearch = async () => {
  const res = await apiClient.get(`/searchkeyword/v2`);
  return res;
};

//최근 검색어 삭제
export const deleteRecentSearch = async (id) => {
  const res = await apiClient.delete(`/searchkeyword/${id}`);
  return res;
};

// 최근 본 상품 카트 담기
export const postRecentCart = async (productId) => {
  const res = await apiClient.post(`/recentlyviewedproduct/stock`, {
    productId: productId,
  });
  return res.data;
};
