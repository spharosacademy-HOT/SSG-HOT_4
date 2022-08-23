package com.ssghot.ssg.cart.service;

import com.ssghot.ssg.cart.dto.*;
import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;

import java.util.List;

public interface ICartService {
    /*
    1. 카트추가
    2. 카트 수정
    3. 카트 상세 조회
    4. 카트 유저별 조회
    5. 카트 전체 조회
    6. 카트 삭제
     */
    ResultDtoOutput<CartDtoOutput> addCart(CartDtoInput cartDtoInput);

    ResultDtoOutput<CartDtoOutput> editCountCart(CartEditDtoInput cartEditDtoInput);

    ResultDtoOutput<CartDtoOutput> getCartById(Long id);

    ResultsDtoOutput<List<CartByUserDtoOutput>> getCartByUserId(Long userId);

    ResultsDtoOutput<List<CartDtoOutput>> getAll();

    void deleteCart(Long id);

    ResultDtoOutput<CartDtoOutput> editStockCart(CartEditStockDtoInput cartEditStockDtoInput);


}
