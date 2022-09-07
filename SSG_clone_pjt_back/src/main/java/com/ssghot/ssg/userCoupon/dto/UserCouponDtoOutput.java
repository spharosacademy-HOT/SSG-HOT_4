package com.ssghot.ssg.userCoupon.dto;

import com.ssghot.ssg.coupon.dto.CouponDtoOutput;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserCouponDtoOutput {
    private Long id;
    private Long userId;
    private CouponDtoOutput coupon;
    private boolean valid;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
}
