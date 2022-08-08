package com.ssghot.ssg.product.domain;

import com.ssghot.ssg.common.CommonDTO;
import lombok.*;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper=false)
public class Product extends CommonDTO {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name; // 상품명
    private int price; // 가격
    private int stockQuantity; // 재고 개수
    private int star; // 별점
    private String detail; // 상세설명
    private int deliveryCondition; // 배송조건
    private int viewCount; // 조회수
    private int sellCount; // 판매 개수
    private String brandName; // 브랜드 이름
    private String optionList; // 옵션
    private String titleImgUrl; // 타이틀 이미지 url
    private String titleImgTxt; // 타이틀 이미지 txt

//    @ManyToOne
//    private CategoryM categoryM;

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
