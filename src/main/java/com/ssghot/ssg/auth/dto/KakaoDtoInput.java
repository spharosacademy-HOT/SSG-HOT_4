package com.ssghot.ssg.auth.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class KakaoDtoInput {
    private String authorizationCode;
}
