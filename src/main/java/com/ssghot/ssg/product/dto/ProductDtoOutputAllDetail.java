package com.ssghot.ssg.product.dto;

import com.ssghot.ssg.categoryProductList.dto.CategoryProductListDtoOutput;
import com.ssghot.ssg.optionList.dto.StockDtoOutputOnlyId;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductDtoOutputAllDetail {

    private Long id; // 상품 id
    private String name; // 상품명
    private int regularPrice; // 정가
    private int discountPrice; // 할인가
    private float discountRate; // 할인율
    private int shippingFee; // 배송비
//    private int stockQuantity; // 재고 개수
    private int star; // 별점
    private String detail; // 상세설명
    private int deliveryCondition; // 배송조건
    private int viewCount; // 조회수
    private int sellCount; // 판매 개수
    private String brandName; // 브랜드 이름
//    private String optionList; // 옵션
    private String titleImgUrl; // 타이틀 이미지 url
    private String titleImgTxt; // 타이틀 이미지 txt

    //=== ProductSubImg ===///
    private List<ProductSubImgDtoOutputOnlyId> productSubImgList;

    //=== OptionList ===///
    private List<StockDtoOutputOnlyId> stockList;

    //=== CategoryProductList ===///
    private List<CategoryProductListDtoOutput> categoryProductList;

}
