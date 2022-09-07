package com.ssghot.ssg.coupon.controller;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.coupon.dto.CouponDtoInput;
import com.ssghot.ssg.coupon.dto.CouponDtoOutput;
import com.ssghot.ssg.coupon.dto.CouponEditDtoInput;
import com.ssghot.ssg.coupon.service.ICouponService;
import com.ssghot.ssg.s3.service.S3Uploader;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/coupons")
@RequiredArgsConstructor
public class CouponController {
    private final ICouponService iCouponService;
    private final S3Uploader s3Uploader;
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResultDtoOutput<CouponDtoOutput> addCoupon(@RequestPart CouponDtoInput request, @RequestPart(required = false) MultipartFile imgFile) throws IOException {

        if(imgFile!=null) {
            String imgUrl = s3Uploader.upload(imgFile, "");
            return iCouponService.addCoupon(request,imgUrl);
        }
        return iCouponService.addCoupon(request,null);
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
    public ResultDtoOutput<CouponDtoOutput> editCoupon(@RequestPart CouponEditDtoInput request, @RequestPart(required = false) MultipartFile imgFile) throws IOException {
        if(imgFile!=null) {
            String imgUrl = s3Uploader.upload(imgFile, "");
            return iCouponService.editCoupon(request,imgUrl);
        }
        return iCouponService.editCoupon(request,null);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteCoupon(@PathVariable Long id){
        iCouponService.deleteCoupon(id);
    }

}
