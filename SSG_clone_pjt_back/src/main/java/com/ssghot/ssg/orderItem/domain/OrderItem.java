package com.ssghot.ssg.orderItem.domain;

import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.order.domain.Order;
import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@EqualsAndHashCode(callSuper=false)
public class OrderItem extends CommonDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Stock stock;

    @ManyToOne
    private Order order;

    // 상품 개수
    @NotNull
    private int count;

    // 상품 가격
    @NotNull
    private int price;

    // 딜리버리 상태
    @Column(nullable = false)
    private String deliveryStatus;

    // 딜리버리 정보
    @Column(nullable = false)
    private LocalDateTime deliveryInfo;

    @PrePersist
    public void prePersist() {
        this.deliveryStatus = this.deliveryStatus == null ? "배송 준비중" : this.deliveryStatus;
        this.deliveryInfo =this.deliveryInfo == null? LocalDateTime.now().plusDays(2):this.deliveryInfo;

    }

    public void setOrder(Order order){
        this.order = order;
    }


}
