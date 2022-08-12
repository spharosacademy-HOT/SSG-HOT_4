package com.ssghot.ssg.coupon.controller;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.coupon.dto.CouponDtoInput;
import com.ssghot.ssg.coupon.dto.CouponDtoOutput;
import com.ssghot.ssg.coupon.dto.CouponEditDtoInput;
import com.ssghot.ssg.coupon.service.ICouponService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/coupons")
@RequiredArgsConstructor
public class CouponController {
    private final ICouponService iCouponService;

    @PostMapping("")
    public ResultDtoOutput<CouponDtoOutput> addCoupon(@RequestBody CouponDtoInput couponDtoInput){
        return iCouponService.addCoupon(couponDtoInput);
    }
    @GetMapping("")
    public ResultsDtoOutput<List<CouponDtoOutput>> getAll(){
        return iCouponService.getAll();
    }

    @GetMapping("/valid")
    public ResultsDtoOutput<List<CouponDtoOutput>> getValidAll(){
        return iCouponService.getValidCouponList();
    }

    @GetMapping("/{id}")
    public ResultDtoOutput<CouponDtoOutput> getCouponById(@PathVariable Long id){
        return iCouponService.getCouponById(id);
    }

    @PutMapping("")
    public ResultDtoOutput<CouponDtoOutput> editCoupon(@RequestBody CouponEditDtoInput couponEditDtoInput){
        return iCouponService.editCoupon(couponEditDtoInput);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteCoupon(@PathVariable Long id){
        iCouponService.deleteCoupon(id);
    }

}
