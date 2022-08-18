package com.ssghot.ssg.event.dto;

import lombok.Builder;

@Builder
public class EventDtoOutput {

    private Long id;
    private String title;
    private String content;
    private String imgUrl;
    private String imgUrl2;
    private String startDate;
    private String endDate;

    private Long userId;
}
