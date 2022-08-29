package com.ssghot.ssg.order.domain;

import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.orderItem.domain.OrderItem;
import com.ssghot.ssg.userCoupon.domain.UserCoupon;
import com.ssghot.ssg.users.domain.User;
import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name = "Orders")
@ToString(exclude = "orderItems")
@EqualsAndHashCode(callSuper=false)
public class Order extends CommonDTO{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // --------결제 정보-------
    //최종 주문 금액
    @NotNull
    private int amountPaid;

    // 총 상품 금액
    @NotNull
    private int orderTotal;

    // 배송비
    @NotNull
    private int deliveryPay;

    // ---------배송지--------

    @NotNull
    private String deliveryName;

    @NotNull
    private String deliveryPhone;

    @NotNull
    private String deliveryAddress;

    @NotNull
    private int deliveryZipcode;

    @Column(columnDefinition = "varchar(13) default ''")
    private String deliveryHomePhone;

    @NotNull
    private String deliveryInfo;

    // 송장 번호
    @NotNull
    private String envoice;
    // ---------------------------

    // 결제방법
    @Column(columnDefinition = "varchar(255) default '기타'")
    private String paymentOption;

    @ManyToOne
    private User user;

    // 쿠폰 사용 확인
    @ManyToOne
    private UserCoupon userCoupon;


    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    @Builder.Default
    private List<OrderItem> orderItems = new ArrayList<>();

    @PrePersist
    public void prePersist() {
        this.deliveryHomePhone = this.deliveryHomePhone == null ? "" : this.deliveryHomePhone;
        this.paymentOption = this.paymentOption == null? "기타":this.paymentOption;
    }
        public void addOrderItem(OrderItem orderItem){

        orderItem.setOrder(this);
        orderItems.add(orderItem);
    }

}
