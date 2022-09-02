import { basicApiClient } from "./apiClient";
import { apiClient } from "./apiClient"

// 상품 디테일 조회
export const getProduct=async(id)=>{
    const res= await apiClient.get(`/product/${id}`)
    return res.data
}

// 상품 옵션 추가
export const addOption = async()=>{
    const res = await apiClient.post(`/carts`)
    return res.data
}

// 상품 구매
export const purchaseProduct = async (purchaseData) =>{
    const res = await apiClient.post(`/orders`,purchaseData);
    return res;
}