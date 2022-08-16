package com.ssghot.ssg.userCoupon.controller;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.userCoupon.dto.UserCouponDtoInput;
import com.ssghot.ssg.userCoupon.dto.UserCouponDtoOutput;
import com.ssghot.ssg.userCoupon.dto.UserCouponEditDtoInput;
import com.ssghot.ssg.userCoupon.service.IUserCouponService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/user/coupons")
@RequiredArgsConstructor
public class UserCouponController {
    private final IUserCouponService iUserCouponService;

    @PostMapping
    public ResultDtoOutput<UserCouponDtoOutput> addUserCoupon(@RequestBody UserCouponDtoInput userCouponDtoInput){
        return iUserCouponService.addUserCoupon(userCouponDtoInput);
    }
    @GetMapping
    public ResultsDtoOutput<List<UserCouponDtoOutput>> getAll(){
        return iUserCouponService.getAll();
    }

    @GetMapping("/{id}")
    public ResultDtoOutput<UserCouponDtoOutput> getUserCouponById(@PathVariable Long id){
        return iUserCouponService.getUserCouponById(id);
    }
    @GetMapping("/user/{id}")
    public ResultsDtoOutput<List<UserCouponDtoOutput>> getUserCouponByUserId(@PathVariable Long id){
        return iUserCouponService.getUserCouponListByUserId(id);
    }

    @PatchMapping
    public ResultDtoOutput<UserCouponDtoOutput> editUserCoupon(@RequestBody UserCouponEditDtoInput userCouponEditDtoInput){
        return iUserCouponService.editUserCoupon(userCouponEditDtoInput);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteUserCoupon(@PathVariable Long id){
        iUserCouponService.deleteUserCoupon(id);
    }
}
