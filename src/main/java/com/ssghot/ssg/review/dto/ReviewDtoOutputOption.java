package com.ssghot.ssg.review.dto;

import com.ssghot.ssg.orderItem.domain.OrderItem;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ReviewDtoOutputOption {

    private Long id;
    private String title;
    private String content;
    private String imgUrl;
    private String imgUrl2;
    private int star;
    private int viewCount;

    private Long productId;
    private OrderItem orderItem;
    private Long userId;
}
