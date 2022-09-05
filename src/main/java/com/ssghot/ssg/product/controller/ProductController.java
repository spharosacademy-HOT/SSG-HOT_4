package com.ssghot.ssg.product.controller;

import com.ssghot.ssg.optionList.repository.IStockRepository;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.domain.ProductSubImg;
import com.ssghot.ssg.product.dto.*;
import com.ssghot.ssg.product.repository.IProductRepository;
import com.ssghot.ssg.product.service.IProductService;
import com.ssghot.ssg.product.service.IProductSubImgService;
import com.ssghot.ssg.users.sevice.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
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

    private final IUserService iUserService;

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
        10. 상품 Id, Name 조회하기

        11. 상품 검색하기
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
    @GetMapping("/product/page")
    public Page<ProductDtoOutputAll> getAllProductPage2(@PageableDefault(size = 40) Pageable pageable){
        Page<ProductDtoOutputAll> productPage = iProductService.getProductAllPage(pageable);
//        Page<ProductDtoOutputAll> productDtoOutputAllList = iProductService.getProductAll(pageable);
        return productPage;
    }

//    // 3-5. 상품 전체 조회하기 (슬라이스)
//    @GetMapping("/product")
//    public Slice<ProductDtoOutputAll> getAllProductSlice(Pageable pageable){
//        Slice<ProductDtoOutputAll> productPage = iProductService.getProductAllSlice(pageable);
////        Page<ProductDtoOutputAll> productDtoOutputAllList = iProductService.getProductAll(pageable);
//        return productPage;
//    }

    // 3-5. 상품 전체 조회하기 (슬라이스)
    @GetMapping("/product")
    public Slice<ProductDtoOutputAll> getAllProductSlice(Pageable pageable, @RequestHeader HttpHeaders headers){
        Long userId = iUserService.getUserByTokenFix(headers);

        if(userId != null){ // 유저 정보 있을 때
            Slice<ProductDtoOutputAll> productPage = iProductService.getProductAllWithUserWishedSlice(pageable, userId);
            return productPage;
        } // 유저 정보 없을 떄
        Slice<ProductDtoOutputAll> productPage = iProductService.getProductAllSlice(pageable);
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

    // 11. 상품 검색하기 (상품 이름만)
//    @GetMapping("/product/search")
//    public Page<ProductDtoOutputAll> getSearchName(String query, Pageable pageable){
//        // @PageableDefault(sort = "id", direction = Sort.Direction.DESC)
//        return iProductService.getSearchNameListPage(query, pageable);
//    }

    // 11-2. 상품 검색하기 (상품 이름 + 카테고리M id)
    @GetMapping("/product/search/categorym")
    public Page<ProductDtoOutputAll> getSearchNameAndCategoryMId(String name, Long categorymid, Pageable pageable){
        // @PageableDefault(sort = "id", direction = Sort.Direction.DESC)
        return iProductService.getSearchNameAndCategoryMIdListPage(name, categorymid, pageable);
    }

    // 11-3. 상품 검색하기 (상품 이름 + 가격대)
    @GetMapping("/product/search/price")
    public Page<ProductDtoOutputAll> getSearchNameAndPrice(String name, int minPrice, int maxPrice, Pageable pageable){
        // @PageableDefault(sort = "id", direction = Sort.Direction.DESC)
        return iProductService.getSearchNameAndBetweenDiscountPrice(name, minPrice, maxPrice, pageable);
    }

    // 11-4. 상품 검색하기
    @GetMapping("/product/search")
    public Page<ProductDtoOutputAll> getSearchNameAndPrice1(
            String name, Long category, Integer minPrice, Integer maxPrice, @PageableDefault(size = 30) Pageable pageable){
        // @PageableDefault(sort = "id", direction = Sort.Direction.DESC)
        if(category == null && minPrice == null && maxPrice == null){
            return iProductService.getSearchNameListPage(name, pageable);
        } else if (category != null && minPrice == null && maxPrice == null) {
//            System.out.println("category = " + category);
            return iProductService.getSearchNameAndCategoryMIdListPage(name, category, pageable);
        } else if (category == null) {
            return iProductService.getSearchNameAndBetweenDiscountPrice(name, minPrice, maxPrice, pageable);
        } else if (category != null && minPrice != null && maxPrice != null) {
            return iProductService.getSearchNameAndCategoryMIdAndBetweenDiscountPrice(name, category, minPrice, maxPrice, pageable);
        }

        return null;
    }

}
