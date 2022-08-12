package com.ssghot.ssg.coupon.service;


import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.coupon.dto.CouponDtoInput;
import com.ssghot.ssg.coupon.dto.CouponDtoOutput;
import com.ssghot.ssg.coupon.dto.CouponEditDtoInput;

import java.util.List;

public interface ICouponService {
    /*
        1. 쿠폰 생성
        2. 쿠폰 전체 조회
        3. 쿠폰 조회
        4. 쿠폰 쿠폰 수정
        5. 쿠폰 삭제
     */
    ResultDtoOutput<CouponDtoOutput> addCoupon(CouponDtoInput couponDtoInput);

    ResultsDtoOutput<List<CouponDtoOutput>> getAll();

    ResultsDtoOutput<List<CouponDtoOutput>> getValidCouponList();
    ResultDtoOutput<CouponDtoOutput> getCouponById(Long id);

    ResultDtoOutput<CouponDtoOutput> editCoupon(CouponEditDtoInput couponEditDtoInput);

    void deleteCoupon(Long id);
}
