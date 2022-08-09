package com.ssghot.ssg.product.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductDtoInputAll {

    private Long id;
    private String name; // 상품명
    private int price; // 가격
    private int stockQuantity; // 재고 개수
    //private int star; // 별점
    private String detail; // 상세설명
    private int deliveryCondition; // 배송조건
    //private int viewCount; // 조회수
    //private int sellCount; // 판매 개수
    private String brandName; // 브랜드 이름
    private String optionList; // 옵션
    private String titleImgUrl; // 타이틀 이미지 url
    private String titleImgTxt; // 타이틀 이미지 txt
    private LocalDateTime createdDate;

//    List<ProductSubImg> productSubImgList;


//    public Product toEntity(){
//        return Product.builder()
//                .name(name)
//                .price(price)
//                .stockQuantity(stockQuantity)
//                .detail(detail)
//                .deliveryCondition(deliveryCondition)
//                .brandName(brandName)
//                .optionList(optionList)
//                .titleImgUrl(titleImgUrl)
//                .titleImgTxt(titleImgTxt)
//                .build();
//    }

}
