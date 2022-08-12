package com.ssghot.ssg.userCoupon.controller;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.userCoupon.dto.UserCouponDtoInput;
import com.ssghot.ssg.userCoupon.dto.UserCouponDtoOutput;
import com.ssghot.ssg.userCoupon.service.IUserCouponService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/user/coupons")
@RequiredArgsConstructor
public class UserCouponController {
    private final IUserCouponService iUserCouponService;

    @PostMapping("")
    public ResultDtoOutput<UserCouponDtoOutput> addUserCoupon(@RequestBody UserCouponDtoInput userCouponDtoInput){
        return iUserCouponService.addUserCoupon(userCouponDtoInput);
    }
    @GetMapping("")
    public ResultsDtoOutput<List<UserCouponDtoOutput>> getAll(){
        return iUserCouponService   .getAll();
    }

}
