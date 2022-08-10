package com.ssghot.ssg.coupon.repository;

import com.ssghot.ssg.order.domain.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICouponRepository extends JpaRepository<Coupon, Long> {

}
