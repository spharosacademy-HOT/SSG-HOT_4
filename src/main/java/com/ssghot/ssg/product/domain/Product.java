package com.ssghot.ssg.product.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssghot.ssg.category.domain.CategoryM;
import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.review.domain.Review;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper=false)
public class Product extends CommonDTO {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true)
    private String name; // 상품명
    @Column(nullable = true)
    private int regularPrice; // 정가
    @Column(nullable = true)
    private int discountPrice; // 할인가
    @Column(nullable = true)
    private float discountRate; // 할인율
    @Column(nullable = true)
    private int shippingFee; // 배송비
//    @Column(nullable = true)
//    private int stockQuantity; // 재고 개수
    @Column(nullable = true)
    private int star; // 별점
    @Column(nullable = true)
    private String detail; // 상세설명
    @Column(nullable = true)
    private int deliveryCondition; // 배송조건
    @Column(nullable = true)
    private int viewCount; // 조회수
    @Column(nullable = true)
    private int sellCount; // 판매 개수
    @Column(nullable = true)
    private String brandName; // 브랜드 이름
//    @Column(nullable = true)
//    private String optionList; // 옵션
    @Column(nullable = true)
    private String titleImgUrl; // 타이틀 이미지 url
    @Column(nullable = true)
    private String titleImgTxt; // 타이틀 이미지 txt

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    private CategoryM categoryM;

    @OneToMany
    private List<Review> reviewList;

//    @OneToMany
//    private List<WishList> wishLists;

    //=== 조회 수 증가 ===//
    public int addViewCount(){
        return this.viewCount++;
    }

//    id BIGINT
//    name VARCHAR(45)
//    price INT
//    discount_price INT
//    stuck_product INT
//    profile_img_url VARCHAR(45)
//    sub_img_url VARCHAR(45)
//    detail BLOB
//    delivery_condition INT
//    created_date DATETIME
//    view_count INT
//    sell_count INT
//    seller_id INT
//    updated_date DATETIME
//    brand_name VARCHAR(45)

}
