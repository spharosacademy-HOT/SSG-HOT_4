package com.ssghot.ssg.product.controller;

import com.ssghot.ssg.optionList.repository.IStockRepository;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.domain.ProductSubImg;
import com.ssghot.ssg.product.dto.*;
import com.ssghot.ssg.product.repository.IProductRepository;
import com.ssghot.ssg.product.service.IProductService;
import com.ssghot.ssg.product.service.IProductSubImgService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    private final IProductService iProductService;
    private final IProductSubImgService iProductSubImgService;

    private final IStockRepository iStockRepository;

    private final IProductRepository iProductRepository;

    /*
        1. 상품 등록하기
        2. 상품 수정하기
        3-1. 상품 전체 조회하기
        3-2. 상품 전체 조회하기 (각각의 아이디만)
        3-3. 상품 전체 조회하기 (페이지)
        4. 상품 단일 조회하기

        5. 서브 이미지 등록하기
        6. 서브 이미지 수정하기
        7-1. 서브 이미지 전체 조회하기 (아이디만)
        7-2. 서브 이미지 전체 조회하기 (전체 컬럼)
        8. 서브 이미지 단일 조회하기

        9. 상품-재고 조회하기
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

    // 3-1. 상품 전체 조회하기 -> 3-4 상품 전체 조회하기 페이지 DTO
//    @GetMapping("/product")
//    public List<ProductDtoOutputAll> getAllProduct(){
//        return iProductService.getProductAll();
//    }


    // 3-2. 상품 전체 조회하기 (각각의 아이디만)
    @GetMapping("/productid")
    public List<ProductDtoOutputAllAndEachId> getAllProductAndEachId(){
        return iProductService.getProductAllAndEachId();
    }

    // 3-3. 상품 전체 조회하기 (페이지)
    @GetMapping("/product/page2")
    public Page<Product> getAllProductPage(Pageable pageable){
        Page<Product> productPage = iProductRepository.findAll(pageable);
//        Page<ProductDtoOutputAll> productDtoOutputAllList = iProductService.getProductAll(pageable);
        return productPage;
    }

    // 3-4. 상품 전체 조회하기 (페이지 DTO)
    @GetMapping("/product")
    public Page<ProductDtoOutputAll> getAllProductPage2(@PageableDefault(size = 10) Pageable pageable){
        Page<ProductDtoOutputAll> productPage = iProductService.getProductAllPage(pageable);
//        Page<ProductDtoOutputAll> productDtoOutputAllList = iProductService.getProductAll(pageable);
        return productPage;
    }

    // 3-5. 상품 전체 조회하기 (슬라이스)
    @GetMapping("/product/slice")
    public Slice<ProductDtoOutputAll> getAllProductSlice(Pageable pageable){
        Slice<ProductDtoOutputAll> productPage = iProductService.getProductAllSlice(pageable);
//        Page<ProductDtoOutputAll> productDtoOutputAllList = iProductService.getProductAll(pageable);
        return productPage;
    }


    // 4. 상품 단일 조회하기
    @GetMapping("/product/{id}")
    public ProductDtoOutputAllDetail getOneProduct(@PathVariable Long id){
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

    // 7-1. 서브 이미지 전체 조회하기 (아이디만)
    @GetMapping("/product/subimgid")
    public List<ProductSubImgDtoOutputOnlyId> getAllProductSubImgOnlyId(){
        return iProductSubImgService.getAllOnlyId();
    }

    // 7-2. 서브 이미지 전체 조회하기 (전체 컬럼)
    @GetMapping("/product/subimg")
    public List<ProductSubImgDtoOutputAll> getAllProductSubImg(){
        return iProductSubImgService.getAll();
    }

    // 8. 서브 이미지 단일 조회하기
    @GetMapping("/product/subimg/{productSubImgId}")
    public ProductSubImgDtoOutputAll getOneProductSubImg(@PathVariable Long productSubImgId){
        return iProductSubImgService.getOne(productSubImgId);
    }

    // 9. 상품-재고 조회하기
    @GetMapping("/product/stock/{id}")
    public ProductDtoOutputStockByProductId getStockByProductId(@PathVariable Long id){
        return iProductService.getStockByProductId(id);
    }

    // 10. 상품 Id, Name 조회하기
    @GetMapping("/product/id/{id}")
    public ProductDtoOutputIdName getProductIdAndName(@PathVariable Long id){
        return null;
    }
}
