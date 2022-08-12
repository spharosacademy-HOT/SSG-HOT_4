package com.ssghot.ssg.userCoupon.service;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.coupon.domain.Coupon;
import com.ssghot.ssg.coupon.dto.CouponDtoOutput;
import com.ssghot.ssg.coupon.repository.ICouponRepository;
import com.ssghot.ssg.userCoupon.domain.UserCoupon;
import com.ssghot.ssg.userCoupon.dto.UserCouponDtoInput;
import com.ssghot.ssg.userCoupon.dto.UserCouponDtoOutput;
import com.ssghot.ssg.userCoupon.repository.IUserCouponRepository;
import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service
public class UserCouponServiceImpl implements IUserCouponService{
    private final IUserCouponRepository iUserCouponRepository;
    private final IUserRepository iUserRepository;
    private final ICouponRepository iCouponRepository;
    @Override
    public ResultDtoOutput<UserCouponDtoOutput> addUserCoupon(UserCouponDtoInput userCouponDtoInput) {
        Optional<Coupon> coupon = iCouponRepository.findById(userCouponDtoInput.getCouponId());
        Optional<User> user = iUserRepository.findById(userCouponDtoInput.getUserId());
        if(coupon.isPresent() && user.isPresent()){
            UserCoupon userCoupon = iUserCouponRepository.save(userCouponDtoInput.toEntity(coupon.get(), user.get()));
            return getUserCouponDtoOutput(200,"유저에게 쿠폰이 등록되었습니다.",userCoupon);
        }

        return getUserCouponDtoOutput(404,"등록 실패",null);
    }

    @Override
    public ResultsDtoOutput<List<UserCouponDtoOutput>> getAll() {
        List<UserCoupon> userCoupons = iUserCouponRepository.findAll();
        if(userCoupons.isEmpty()){
            return getUserCouponDtoOutputList(404,"쿠폰 목록이 존재하지 않습니다.",null);
        }
        return getUserCouponDtoOutputList(200, "유저 쿠폰 테이블 속성들을 가져왔습니다.",userCoupons);
    }

    @Override
    public ResultDtoOutput<UserCouponDtoOutput> getUserCouponById(Long id) {
        Optional<UserCoupon> userCoupon = iUserCouponRepository.findById(id);
        if(userCoupon.isPresent()){
            return getUserCouponDtoOutput(200,"유저 쿠폰을 가져왔습니다.",userCoupon.get());
        }
        return getUserCouponDtoOutput(404,"쿠폰 정보가 없습니다.",null);
    }

    @Override
    public ResultsDtoOutput<List<UserCouponDtoOutput>> getUserCouponListByUserId(Long userId) {
        List<UserCoupon> userCoupons = iUserCouponRepository.findByUserId(userId);
        if(userCoupons.isEmpty()){

        }
        return null;
    }


    private ResultDtoOutput<UserCouponDtoOutput> getUserCouponDtoOutput(int status, String message, UserCoupon userCoupon){
        if(userCoupon!=null){
            return new ResultDtoOutput<>(status,message,UserCouponDtoOutput.builder()
                    .id(userCoupon.getId())
                    .couponDtoOutput(CouponDtoOutput.toEntity(userCoupon.getCoupon()))
                    .userId(userCoupon.getUser().getId())
                    .build());
        }
     return new ResultDtoOutput<>(status,message,null);
    }

    private ResultsDtoOutput<List<UserCouponDtoOutput>> getUserCouponDtoOutputList(int status, String message,List<UserCoupon> userCoupons){
        if(userCoupons!=null){
            List<UserCouponDtoOutput> collect = userCoupons.stream().map(userCoupon ->
                    UserCouponDtoOutput.builder()
                            .id(userCoupon.getId())
                            .couponDtoOutput(CouponDtoOutput.toEntity(userCoupon.getCoupon()))
                            .userId(userCoupon.getUser().getId())
                            .build()).collect(Collectors.toList());
            return new ResultsDtoOutput<>(status,message,collect.size(),collect);
        }
        return new ResultsDtoOutput<>(status,message,0,null);
    }
}

