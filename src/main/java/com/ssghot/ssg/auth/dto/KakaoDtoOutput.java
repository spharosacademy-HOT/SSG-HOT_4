package com.ssghot.ssg.auth.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class KakaoDtoOutput {
    private String access_token;
    private String refresh_token;
}
