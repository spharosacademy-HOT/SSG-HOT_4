package com.ssghot.ssg.userCoupon.dto;

import com.ssghot.ssg.userCoupon.domain.UserCoupon;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserCouponEditDtoInput {
    private Long id;
    private boolean valid;

    public UserCoupon toEntity(UserCoupon userCoupon){

        return UserCoupon.builder()
                .id(getId())
                .coupon(userCoupon.getCoupon())
                .user(userCoupon.getUser())
                .valid((isValid())?isValid():false)
                .build();
    }
}
