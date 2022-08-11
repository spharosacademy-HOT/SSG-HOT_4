package com.ssghot.ssg.coupon_conn.domain;


import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.users.domain.User;
import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@EqualsAndHashCode(callSuper=false)
public class CouponConn  extends CommonDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @ManyToOne
//    private Coupon coupon;

    @ManyToOne
    private User user;


}

