package com.ssghot.ssg.coupon.dto;

import com.ssghot.ssg.coupon.domain.Coupon;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CouponDtoInput {
    private String name;
    private int discount;
    private int maxDiscount;
    private String termsOfUse;

    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime startDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime endDate;
    public Coupon toEntity(String imgUrl){

        return Coupon.builder()
                .name(getName())
                .discount(getDiscount())
                .imgUrl(imgUrl)
                .maxDiscount(getMaxDiscount())
                .termsOfUse(getTermsOfUse())
                .startDate(getStartDate())
                .endDate(getEndDate())
                .build();
    }
}
