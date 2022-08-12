package com.ssghot.ssg.order.domain;

import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.product.domain.Product;
import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name = "orders")
@EqualsAndHashCode(callSuper=false)
public class Order extends CommonDTO{

    @Id  @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Product product;


    // 상품 개수
    private int count;

    // 상품 가격
    private int price;

    // 딜리버리 상태
    @Column(nullable = false)
    private String deliveryStatus;

    // 딜리버리 정보
    @Column(nullable = false)
    private String deliveryInfo;

}
