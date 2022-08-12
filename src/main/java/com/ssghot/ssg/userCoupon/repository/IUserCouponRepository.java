package com.ssghot.ssg.userCoupon.repository;

import com.ssghot.ssg.userCoupon.domain.UserCoupon;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IUserCouponRepository extends JpaRepository<UserCoupon,Long> {
    List<UserCoupon> findByUserId(Long userId);
}
