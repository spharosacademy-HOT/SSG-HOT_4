package com.ssghot.ssg.userCoupon.repository;

import com.ssghot.ssg.userCoupon.domain.UserCoupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface IUserCouponRepository extends JpaRepository<UserCoupon,Long> {
    List<UserCoupon> findByUserId(Long userId);
    Optional<UserCoupon> findByCouponIdAndUserId(Long couponId, Long userId);
    @Query("select uc from UserCoupon uc where uc.user.id = :userId and uc.valid = false and uc.coupon.endDate>= :localDateTime")
    List<UserCoupon> findValidUserCouponList(Long userId, LocalDateTime localDateTime);
}
