package com.ssghot.ssg.order.domain;

import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.users.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Coupon  extends CommonDTO{
    @Id  @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 쿠폰 이름
    @Column(nullable = false)
    private String name;

    // 할인율
    @Column(nullable = false)
    private int discount;

    //  최대할인
    @Column(nullable = false)
    private int maxDiscount;

    // 사용 조건
    @Column(nullable = false)
    private String TermsOfUse;

    // 사용기간
    @Column(nullable = false)
    private LocalDateTime startDate;

    @Column(nullable = false)
    private LocalDateTime endDate;


}
