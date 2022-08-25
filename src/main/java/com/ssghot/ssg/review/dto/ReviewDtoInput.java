package com.ssghot.ssg.review.dto;

import com.ssghot.ssg.orderItem.domain.OrderItem;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.users.domain.User;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class ReviewDtoInput {

    private String title;
    private String content;
    private String imgUrl;
    private String imgUrl2;
    private int star;
    private int viewCount;

    private Product product;
    private OrderItem orderItem;
    private User user;
}
