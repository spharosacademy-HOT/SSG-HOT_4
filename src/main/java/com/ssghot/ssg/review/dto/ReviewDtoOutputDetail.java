package com.ssghot.ssg.review.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class ReviewDtoOutputDetail {

    private Long id;
    private String title;
    private String content;
    private String imgUrl;
    private String imgUrl2;
    private int star;
    private int viewCount;

    private Long orderItemId;
    private Long userId;
    private Long optionFirstId;
    private Long optionSecondId;

    private LocalDateTime createdDate;
}
