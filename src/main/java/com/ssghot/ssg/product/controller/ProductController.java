package com.ssghot.ssg.product.controller;

import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.domain.ProductSubImg;
import com.ssghot.ssg.product.dto.ProductDtoInputAll;
import com.ssghot.ssg.product.dto.ProductDtoOutputAll;
import com.ssghot.ssg.product.dto.ProductSubImgDtoInput;
import com.ssghot.ssg.product.service.IProductService;
import com.ssghot.ssg.product.service.IProductSubImgService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/ssghot")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    private final IProductService iProductService;
    private final IProductSubImgService iProductSubImgService;

    /*
        1. 상품 등록하기
        2. 상품 수정하기
        3. 상품 전체 조회하기
        4. 상품 단일 조회하기

        5. 서브 이미지 등록하기
        6. 서브 이미지 수정하기
        7. 서브 이미지 전체 조회하기
        8. 서브 이미지 단일 조회하기
     */

    // 1. 상품 등록하기
    @PostMapping("/product")
    public Product addProduct(@RequestBody ProductDtoInputAll productDtoInputAll){
        return iProductService.addProduct(productDtoInputAll);
    }

    // 2. 상품 수정하기
    @PutMapping("/product/{id}")
    public Product editProduct(@PathVariable Long id, @RequestBody ProductDtoInputAll productDtoInputAll){
        return iProductService.editProduct(id, productDtoInputAll);
    }

    // 3. 상품 전체 조회하기
    @GetMapping("/product")
    public List<ProductDtoOutputAll> getAllProduct(){
        return iProductService.getProductAll();
    }

    // 4. 상품 단일 조회하기
    @GetMapping("/product/{id}")
    public Product getOneProduct(@PathVariable Long id){
        return iProductService.getProductOne(id);
    }

    // 5. 서브 이미지 등록하기
    @PostMapping("/product/subimg")
    public ProductSubImg addProductSubImg(@RequestBody ProductSubImgDtoInput productSubImgDtoInput){
        return iProductSubImgService.addProductSubImg(productSubImgDtoInput);
    }

    // 6. 서브 이미지 수정하기
    @PutMapping("/product/subimg/{id}")
    public ProductSubImg editProductSubImg(@PathVariable Long id, @RequestBody ProductSubImg productSubImg){
        return null;
    }

    // 7. 서브 이미지 전체 조회하기
    @GetMapping("/product/subimg")
    public List<ProductSubImg> getAllProductSubImg(){
        return iProductSubImgService.getAll();
    }

    // 8. 서브 이미지 단일 조회하기
    @GetMapping("/product/subimg/{productSubImgId}")
    public ProductSubImg getOneProductSubImg(@PathVariable Long productSubImgId){
        return iProductSubImgService.getOne(productSubImgId);
    }

}
