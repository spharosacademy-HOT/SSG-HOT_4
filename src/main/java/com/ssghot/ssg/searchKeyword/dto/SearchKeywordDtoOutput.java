package com.ssghot.ssg.searchKeyword.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class SearchKeywordDtoOutput {

    private Long searchKeywordId;

    private String searchKeyword;

    private Long userId;

    private String userName;
}
