package com.ssghot.ssg.userCoupon.service;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.userCoupon.dto.UserCouponDtoInput;
import com.ssghot.ssg.userCoupon.dto.UserCouponDtoOutput;

import java.util.List;

public interface IUserCouponService {
    /*
        1. 유저 쿠폰 생성
        2. 유저별 쿠폰 조회
        3. 전체 조회
        4. 사용가능한 유저별 쿠폰 조회
        5. 쿠폰 사용하기 수정
     */

    ResultDtoOutput<UserCouponDtoOutput> addUserCoupon(UserCouponDtoInput userCouponDtoInput);

    ResultsDtoOutput<List<UserCouponDtoOutput>> getAll();

    ResultDtoOutput<UserCouponDtoOutput> getUserCouponById(Long id);
    ResultsDtoOutput<List<UserCouponDtoOutput>> getUserCouponListByUserId(Long userId);
}
