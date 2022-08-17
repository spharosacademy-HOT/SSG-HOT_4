package com.ssghot.ssg.post.review.dto;

import lombok.Builder;

@Builder
public class ReviewDtoOutput {

    private Long id;
    private String title;
    private String content;
    private String imgUrl;
    private String imgUrl2;
    private int star;
    private int viewCount;

    private Long productId;
    private Long orderId;
    private Long userId;
}
