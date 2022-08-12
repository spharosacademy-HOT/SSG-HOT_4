package com.ssghot.ssg.userCoupon.dto;

import com.ssghot.ssg.coupon.domain.Coupon;
import com.ssghot.ssg.userCoupon.domain.UserCoupon;
import com.ssghot.ssg.users.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserCouponDtoInput {
    private Long couponId;
    private Long userId;

    public UserCoupon toEntity(Coupon coupon, User user){
        return UserCoupon.builder()
                .user(user)
                .coupon(coupon)
                .build();
    }
}
