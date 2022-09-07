package com.ssghot.ssg.coupon.repository;

import com.ssghot.ssg.coupon.domain.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface ICouponRepository extends JpaRepository<Coupon,Long> {

    @Query("select c from Coupon c where c.endDate >= :localDateTime")
    List<Coupon> findValidCouponList(LocalDateTime localDateTime);
}
