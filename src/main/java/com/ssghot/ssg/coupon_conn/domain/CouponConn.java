package com.ssghot.ssg.coupon_conn.domain;


import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.order.domain.Coupon;
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
public class CouponConn  extends CommonDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Coupon coupon;

    @ManyToOne
    private User user;


}

