package com.ssghot.ssg.review.dto;

import com.ssghot.ssg.optionList.domain.OptionFirst;
import com.ssghot.ssg.optionList.domain.OptionSecond;
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
    private OptionFirst optionFirst;
    private OptionSecond optionSecond;

    private LocalDateTime createdDate;
}
