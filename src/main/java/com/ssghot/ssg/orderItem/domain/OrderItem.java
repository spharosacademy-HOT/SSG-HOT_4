package com.ssghot.ssg.orderItem.domain;

import com.ssghot.ssg.coupon.domain.Coupon;
import com.ssghot.ssg.users.domain.User;
import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@EqualsAndHashCode(callSuper=false)
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // --------결제 정보-------
    //최종 주문 금액
    @Column(nullable = false)
    private int amountPaid;

    // 총 상품 금액
    @Column(nullable = false)
    private int orderTotal;

    // 배송비
    @Column(nullable = false)
    private int deliveryPay;

    // ---------배송지--------

    @Column(nullable = false)
    private String deliveryName;

    @Column(nullable = false)
    private String deliveryPhone;

    @Column(nullable = false)
    private String deliveryAddress;

    @Column(nullable = false)
    private String deliveryZipcode;

    @Column(columnDefinition = "varchar(13) default ''")
    private String deliveryHomePhone;

    // 송장 번호
    @Column(nullable = false)
    private int envoice;
    // ---------------------------

    // 결제방법
    @Column(nullable = false)
    private String paymentOption;

    @ManyToOne
    private User user;

     // 쿠폰 사용 확인
    @OneToOne
    private Coupon coupon;

    @PrePersist
    public void prePersist() {
        this.deliveryHomePhone = this.deliveryHomePhone == null ? "" : this.deliveryHomePhone;
    }
}
