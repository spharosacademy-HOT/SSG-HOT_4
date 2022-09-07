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
public class CouponEditDtoInput {
    private Long id;
    private String name;
    private int discount;
    private int maxDiscount;
    private String termsOfUse;
    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime startDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime endDate;
    public Coupon toEntity(Coupon coupon,String imgUrl){
        return Coupon.builder()
                .id((getId()))
                .name((getName()!=null)?getName():coupon.getName())
                .discount((getDiscount()!=0)?getDiscount():coupon.getDiscount())
                .maxDiscount((getMaxDiscount()!=0)?getMaxDiscount():coupon.getMaxDiscount())
                .termsOfUse((getTermsOfUse()!=null)?getTermsOfUse():coupon.getTermsOfUse())
                .startDate((getStartDate()!=null)?getStartDate():coupon.getStartDate())
                .endDate((getEndDate()!=null)?getEndDate():coupon.getEndDate())
                .imgUrl((imgUrl!=null)?imgUrl:coupon.getImgUrl())
                .build();
    }
}
