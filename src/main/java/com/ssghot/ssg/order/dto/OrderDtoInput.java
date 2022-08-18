package com.ssghot.ssg.order.dto;

import com.ssghot.ssg.order.domain.Order;
import com.ssghot.ssg.orderItem.dto.OrderItemDtoInput;
import com.ssghot.ssg.userCoupon.domain.UserCoupon;
import com.ssghot.ssg.users.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderDtoInput {


    private int amountPaid;
    private int orderTotal;
    private int deliveryPay;


    private List<OrderItemDtoInput> orderItems;

    private String deliveryName;
    private String deliveryPhone;
    private String deliveryAddress;
    private int deliveryZipcode;
    private String deliveryHomePone;
    private String deliveryInfo;

    private String envoice;
    private String paymentOption;
    private Long userId;
    private Long couponId;

    public Order toEntity(UserCoupon userCoupon, User user){
        return Order.builder()
                .userCoupon(userCoupon)
                .amountPaid(getAmountPaid())
                .deliveryAddress(getDeliveryAddress())
                .deliveryHomePhone(getDeliveryHomePone())
                .deliveryInfo(getDeliveryInfo())
                .deliveryName(getDeliveryName())
                .deliveryPay(getDeliveryPay())
                .deliveryPhone(getDeliveryPhone())
                .deliveryZipcode(getDeliveryZipcode())
                .envoice(getEnvoice())
                .orderTotal(getOrderTotal())
                .paymentOption(getPaymentOption())
                .user(user)
                .build();
    }
}
