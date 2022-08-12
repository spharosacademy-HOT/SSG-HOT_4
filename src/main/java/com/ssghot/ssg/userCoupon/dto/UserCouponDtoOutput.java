package com.ssghot.ssg.userCoupon.dto;

import com.ssghot.ssg.coupon.dto.CouponDtoOutput;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserCouponDtoOutput {
    private Long id;
    private Long userId;
    private CouponDtoOutput couponDtoOutput;
}
