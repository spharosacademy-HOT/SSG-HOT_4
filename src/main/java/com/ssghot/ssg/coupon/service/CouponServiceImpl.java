package com.ssghot.ssg.coupon.service;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.coupon.domain.Coupon;
import com.ssghot.ssg.coupon.dto.CouponDtoInput;
import com.ssghot.ssg.coupon.dto.CouponDtoOutput;
import com.ssghot.ssg.coupon.dto.CouponEditDtoInput;
import com.ssghot.ssg.coupon.repository.ICouponRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service
public class CouponServiceImpl implements ICouponService{

    private final ICouponRepository iCouponRepository;
    @Override
    public ResultDtoOutput<CouponDtoOutput> addCoupon(CouponDtoInput couponDtoInput) {
        Coupon coupon = iCouponRepository.save(couponDtoInput.toEntity());
        return getCouponDtoOutput(200,"쿠폰이 추가되었습니다.",coupon);
    }

    @Override
    public ResultsDtoOutput<List<CouponDtoOutput>> getAll() {
        List<Coupon> coupons = iCouponRepository.findAll();
        if(coupons.isEmpty()) {
            return getCouponDtoOutputs(404, "쿠폰 목록이 없습니다.", null);
        }
        return getCouponDtoOutputs(200,"쿠폰 목록을 불러왔습니다.",coupons);
    }

    @Override
    public ResultsDtoOutput<List<CouponDtoOutput>> getValidCouponList() {

        List<Coupon> validCouponList = iCouponRepository.findValidCouponList(LocalDateTime.now());
        if(validCouponList.isEmpty()) {
            return getCouponDtoOutputs(404, "유효한 쿠폰 목록이 없습니다.", null);
        }
        return getCouponDtoOutputs(200,"쿠폰 목록을 불러왔습니다.",validCouponList);

    }

    @Override
    public ResultDtoOutput<CouponDtoOutput> getCouponById(Long id) {
        Optional<Coupon> coupon = iCouponRepository.findById(id);
        if(coupon.isPresent()){
            return getCouponDtoOutput(200,"쿠폰 정보를 가져왔습니다.",coupon.get());
        }
        return getCouponDtoOutput(404,"쿠폰 정보가 없습니다.",null);
    }

    @Override
    public ResultDtoOutput<CouponDtoOutput> editCoupon(CouponEditDtoInput couponEditDtoInput) {
        Optional<Coupon> oldCoupon = iCouponRepository.findById(couponEditDtoInput.getId());
        if(oldCoupon.isPresent()){
            Coupon coupon = iCouponRepository.save(couponEditDtoInput.toEntity(oldCoupon.get()));
            return getCouponDtoOutput(200,"쿠폰이 수정되었습니다.",coupon);
        }
        return getCouponDtoOutput(404,"쿠폰이 없습니다.",null);
    }

    @Override
    public void deleteCoupon(Long id) {
        iCouponRepository.deleteById(id);
    }

    private ResultDtoOutput<CouponDtoOutput> getCouponDtoOutput(int status, String message, Coupon coupon){
        if(coupon!=null){
            return new ResultDtoOutput<>(status,message,CouponDtoOutput.builder()
                    .id(coupon.getId())
                    .name(coupon.getName())
                    .discount(coupon.getDiscount())
                    .maxDiscount(coupon.getMaxDiscount())
                    .termsOfUse(coupon.getTermsOfUse())
                    .startDate(coupon.getStartDate())
                    .endDate(coupon.getEndDate())
                    .createdDate(coupon.getCreatedDate())
                    .updatedDate(coupon.getUpdatedDate())
                    .build());
        }
        return new ResultDtoOutput<>(status,message,null);
    }
    private ResultsDtoOutput<List<CouponDtoOutput>> getCouponDtoOutputs(int status, String message,List<Coupon> coupons) {
        if(coupons!=null){
            List<CouponDtoOutput> collect = coupons.stream().map(coupon ->
                    CouponDtoOutput.builder()
                            .id(coupon.getId())
                            .name(coupon.getName())
                            .discount(coupon.getDiscount())
                            .maxDiscount(coupon.getMaxDiscount())
                            .termsOfUse(coupon.getTermsOfUse())
                            .startDate(coupon.getStartDate())
                            .endDate(coupon.getEndDate())
                            .createdDate(coupon.getCreatedDate())
                            .updatedDate(coupon.getUpdatedDate())
                            .build()).collect(Collectors.toList());
            return new ResultsDtoOutput<>(status,message,collect.size(),collect);
        }
        return new ResultsDtoOutput<>(status,message,0,null);
    }
}
