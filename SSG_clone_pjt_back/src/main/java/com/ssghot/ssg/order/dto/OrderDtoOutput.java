package com.ssghot.ssg.order.dto;

import com.ssghot.ssg.orderItem.dto.OrderItemDtoOutput;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderDtoOutput {
    private Long id;
    private int amountPaid;
    private int orderTotal;
    private int deliveryPay;

    private String orderName;

    private String orderPhone;

    private String orderEmail;

    private String orderInfo;

    private String deliveryTaker;
    private String deliveryName;
    private String deliveryPhone;
    private String deliveryAddress;
    private String deliveryAddress2;
    private int deliveryZipcode;
    private String deliveryHomePone;
    private String deliveryInfo;

    private String envoice;
    private String paymentOption;
    private Long userId;
    private Long couponId;

    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;

    private List<OrderItemDtoOutput> orderItems;
}
