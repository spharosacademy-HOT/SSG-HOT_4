package com.ssghot.ssg.userCoupon.domain;


import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.coupon.domain.Coupon;
import com.ssghot.ssg.users.domain.User;
import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@EqualsAndHashCode(callSuper=false)
public class UserCoupon extends CommonDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Coupon coupon;

    @ManyToOne
    private User user;

    // 사용 여부
    @Column(columnDefinition = "boolean default false")
    private boolean valid;

}

