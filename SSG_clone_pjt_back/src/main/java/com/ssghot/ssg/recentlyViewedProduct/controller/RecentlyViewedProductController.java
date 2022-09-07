package com.ssghot.ssg.recentlyViewedProduct.controller;

import com.ssghot.ssg.cart.service.ICartService;
import com.ssghot.ssg.recentlyViewedProduct.dto.RecentlyViewedProductDtoInput;
import com.ssghot.ssg.recentlyViewedProduct.dto.ViewDtoInput;
import com.ssghot.ssg.recentlyViewedProduct.service.IRecentlyViewedProductService;
import com.ssghot.ssg.users.sevice.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RecentlyViewedProductController {

    private final IRecentlyViewedProductService iRecentlyViewedProductService;
    private final IUserService iUserService;
    private final ICartService iCartService;
    /*
        1. 최근 본 상품 등록하기
        2. 최근 본 상품 삭제하기
        3. 최근 본 상품 전체 조회하기
     */

    // 1. 최근 본 상품 등록하기
    @PostMapping("/recentlyviewedproduct")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Map<String,Object>> addRecentlyViewedProduct(@RequestHeader HttpHeaders headers, @RequestBody RecentlyViewedProductDtoInput recentlyViewedProductDtoInput){
        Long userId = iUserService.getUserByTokenFix(headers);
        if(userId==null){
            return ResponseEntity.notFound().build();
        }

        recentlyViewedProductDtoInput.setUserId(userId);
        Map<String,Object> result  = iRecentlyViewedProductService.addView(recentlyViewedProductDtoInput);
        return ResponseEntity.ok().body(result);
    }

    // 2. 최근 본 상품 삭제하기
    @DeleteMapping("/recentlyviewedproduct/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    @PreAuthorize("hasRole('ROLE_USER')")
    public void  deleteRecentlyViewedProduct(@PathVariable Long id){
        iRecentlyViewedProductService.deleteView(id);
    }

//    // 3. 최근 본 상품 전체 조회하기 (슬라이스 적용 X)
//    @GetMapping("/recentlyviewedproduct")
//    public List<RecentlyViewedProductDtoOutput> getAllRecentlyViewedProduct(){
//        return iRecentlyViewedProductService.getAllRecentlyViewedProduct();
//    }

    // 4. 최근 본 상품 전체 조회하기 (슬라이스 적용 O)
    @GetMapping("/recentlyviewedproduct")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Map<String,Object>>  getAllRecentlyViewedProduct(@RequestHeader HttpHeaders headers){
        Long userId = iUserService.getUserByTokenFix(headers);
        if(userId==null){
            return ResponseEntity.notFound().build();
        }
        Map<String, Object> result = iRecentlyViewedProductService.viewByUserId(userId);

        return ResponseEntity.ok().body(result);
    }
    @PostMapping("/recentlyviewedproduct/stock")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Map<String,Object>> findStockBy(@RequestHeader HttpHeaders headers, @RequestBody ViewDtoInput viewDtoInput){
        Long userId = iUserService.getUserByTokenFix(headers);
        if(userId==null){
            return ResponseEntity.notFound().build();
        }
        Map<String, Object> result = iCartService.findCartByProductId(userId, viewDtoInput.getProductId());
        return ResponseEntity.ok().body(result);
    }
}
