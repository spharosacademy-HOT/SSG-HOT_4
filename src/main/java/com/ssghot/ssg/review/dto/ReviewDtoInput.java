package com.ssghot.ssg.review.dto;

import com.ssghot.ssg.order.domain.Order;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.users.domain.User;
import lombok.Getter;

@Getter
public class ReviewDtoInput {

    private String title;
    private String content;
    private String imgUrl;
    private String imgUrl2;
    private int star;
    private int viewCount;

    private Product product;
    private Order order;
    private User user;
}
