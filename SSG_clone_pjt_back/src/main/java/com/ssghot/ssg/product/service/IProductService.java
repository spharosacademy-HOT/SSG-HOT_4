package com.ssghot.ssg.product.service;

import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.dto.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;

import java.util.List;

public interface IProductService {

    /*
        1. 상품 등록하기
        2. 상품 수정하기
        3-1. 상품 전체 조회하기 (전체 컬럼)
        3-2. 상품 전체 조회하기 (각각의 아이디만)
        3-3. 상품 전체 조회하기 (페이지)
        3-4-1. 상품 전체 조회하기 (슬라이스) - 유저 정보 X
        3-4-2. 상품 전체 조회하기 (슬라이스) - 유저 정보 O, 좋아요 정보 받기
        4-1. 상품 단일 조회하기 (유저 아이디 X)
        4-2. 상품 단일 조회하기 (유저 아이디 O)
        5. 상품-재고 현황 조회하기
        6. 상품 Id, Name 조회하기
        7. 상품 검색하기
     */

    // 1. 상품 등록하기
    Product addProduct(ProductDtoInputAll productDtoInputAll);

    // 2. 상품 수정하기
    Product editProduct(Long id, ProductDtoInputAll productDtoInputAll);

    // 3-1. 상품 전체 조회하기 (전체 컬럼)
    List<ProductDtoOutputAll> getProductAll();

    // 3-2. 상품 전체 조회하기 (각각의 아이디만)
    List<ProductDtoOutputAllAndEachId> getProductAllAndEachId();

    // 3-3. 상품 전체 조회하기 (페이지)
    Page<ProductDtoOutputAll> getProductAllPage(Pageable pageable);

    // 3-4. 상품 전체 조회하기 (슬라이스) - 유저 정보 X
    Slice<ProductDtoOutputAll> getProductAllSlice(Pageable pageable);

    // 3-4. 상품 전체 조회하기 (슬라이스) - 유저 정보 O, 좋아요 정보 받기
    Slice<ProductDtoOutputAll> getProductAllWithUserWishedSlice(Pageable pageable, Long userId);

    // 4-1. 상품 단일 조회하기 (유저 아이디 X)
    ProductDtoOutputAllDetail getProductOne(Long productId);

    // 4-2. 상품 단일 조회하기 (유저 아이디 O)
    ProductDtoOutputAllDetail getProductOneWithUserWished(Long productId, Long userId);

    // 5. 상품-재고 현황 조회하기
    ProductDtoOutputStockByProductId getStockByProductId(Long id);

    // 6. 상품 Id, Name 조회하기
    ProductDtoOutputIdName getProductIdName(Long productId);

    // 7-1. 상품 검색하기
//    List<ProductDtoOutputAll> getSearchNameList(String keyword);

    // 7-2-1. 상품 검색하기 (페이징) - 이름만 (유저 정보 X)
    Page<ProductDtoOutputAll> getSearchNameListPage(String query, Pageable pageable);

    // 7-2-2. 상품 검색하기 (페이징) - 이름만 (유저 정보 O)
    Page<ProductDtoOutputAll> getSearchNameListPageWithUserWished(String query, Pageable pageable, Long userId);

    // 7-3-1. 상품 검색하기 (페이징) - 이름, 카테고리 중분류 id (유저 정보 X)
    Page<ProductDtoOutputAll> getSearchNameAndCategoryMIdListPage(String query, Long id, Pageable pageable);

    // 7-3-2. 상품 검색하기 (페이징) - 이름, 카테고리 중분류 id (유저 정보 O)
    Page<ProductDtoOutputAll> getSearchNameAndCategoryMIdListPageWithUserWished(String query, Long id, Pageable pageable, Long userId);

    // 7-4-1. 상품 검색하기 (페이징) - 이름, 가격대 (유저 정보 X)
    Page<ProductDtoOutputAll> getSearchNameAndBetweenDiscountPrice(String query, int minPrice, int maxPrice, Pageable pageable);

    // 7-4-2. 상품 검색하기 (페이징) - 이름, 가격대 (유저 정보 O)
    Page<ProductDtoOutputAll> getSearchNameAndBetweenDiscountPriceWithUserWished(String query, int minPrice, int maxPrice, Pageable pageable, Long userId);

    // 7-5-1. 상품 검색하기 (페이징) - 이름, 가격대 (유저 정보 X)
    Page<ProductDtoOutputAll> getSearchNameAndCategoryMIdAndBetweenDiscountPrice(String keyword, Long id, int minPrice, int maxPrice, Pageable pageable);

    // 7-5-2. 상품 검색하기 (페이징) - 이름, 가격대 (유저 정보 O)
    Page<ProductDtoOutputAll> getSearchNameAndCategoryMIdAndBetweenDiscountPriceWithUserWished(String keyword, Long id, int minPrice, int maxPrice, Pageable pageable, Long userId);
}
