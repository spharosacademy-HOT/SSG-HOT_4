package com.ssghot.ssg.product.controller;

import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.dto.ProductDtoInputAll;
import com.ssghot.ssg.product.dto.ProductDtoOutputAll;
import com.ssghot.ssg.product.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/ssghot")
public class ProductController {

    private final IProductService iProductService;

    /*
        1. 상품 등록하기
        2. 상품 수정하기
        3. 상품 전체 조회하기
        4. 상품 단일 조회하기
     */

    // 1. 상품 등록하기
    @PostMapping("/products")
    public Product addProduct(@RequestBody ProductDtoInputAll productDtoInputAll){
        return iProductService.addProduct(productDtoInputAll);
    }

    // 2. 상품 수정하기



    // 3. 상품 전체 조회하기
    @GetMapping("/products")
    public List<ProductDtoOutputAll> getAll(){
        return iProductService.getProductAll();
    }

    // 4. 상품 단일 조회하기
    @GetMapping("/products/{id}")
    public Product getOne(@PathVariable Long id){
        return iProductService.getProductOne(id);
    }

}
