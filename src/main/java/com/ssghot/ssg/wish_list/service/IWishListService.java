package com.ssghot.ssg.wish_list.service;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.wish_list.dto.WishListDtoInput;
import com.ssghot.ssg.wish_list.dto.WishListDtoOutput;

import java.util.List;

public interface IWishListService {
    /*
        1. 하트 생성
        2. 하트 유저별 조회
        3. 하트 전체 조회
        4. 하트 삭제
     */

    ResultDtoOutput<WishListDtoOutput> addWish(WishListDtoInput wishListDtoInput);
    ResultsDtoOutput<List<WishListDtoOutput>> getWishByUserId(Long userId);
    ResultsDtoOutput<List<WishListDtoOutput>> getAll();
    void deleteWish(Long id);
}
