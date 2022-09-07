package com.ssghot.ssg.event.dto;

import com.ssghot.ssg.users.domain.User;
import lombok.Getter;

@Getter
public class EventDtoInput {

    private String title;
    private String content;
    private String imgUrl;
    private String imgUrl2;
    private String startDate;
    private String endDate;

    private User user;

}
