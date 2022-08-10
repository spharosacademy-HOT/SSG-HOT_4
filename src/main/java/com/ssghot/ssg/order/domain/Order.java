package com.ssghot.ssg.order.domain;

import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.users.domain.User;
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

    @Column(nullable = false)
    private int totalPrice;

    @Column(nullable = false)
    private int envoice;

    @Column(nullable = false)
    private int deliveryPay;

    @Column(nullable = false)
    private String paymentOption;

    @Column(nullable = false)
    private String deliveryState;

    @Column(nullable = false)
    private String deliveryName;

    @Column(nullable = false)
    private String deliveryPhone;

    @Column(nullable = false)
    private String deliveryAddress;

    @Column(nullable = false)
    private String deliveryZipcode;


    @ManyToOne
    private User user;

    @ManyToOne
    private Product product;


}
