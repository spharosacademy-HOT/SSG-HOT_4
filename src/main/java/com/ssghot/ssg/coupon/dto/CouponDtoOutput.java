package com.ssghot.ssg.coupon.dto;

import com.ssghot.ssg.coupon.domain.Coupon;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CouponDtoOutput {

    private Long id;
    private String name;
    private int discount;
    private int maxDiscount;
    private String termsOfUse;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    public static CouponDtoOutput toEntity(Coupon coupon){
       return CouponDtoOutput.builder()
                .id(coupon.getId())
                .name(coupon.getName())
                .discount(coupon.getDiscount())
                .maxDiscount(coupon.getMaxDiscount())
                .termsOfUse(coupon.getTermsOfUse())
                .startDate(coupon.getStartDate())
                .endDate(coupon.getEndDate())
                .createdDate(coupon.getCreatedDate())
                .updatedDate(coupon.getUpdatedDate())
                .build();
    }
}
