package com.ssghot.ssg.users.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class checkEmailDtoOutPut {
    String result;
    String message;
    int status;
    public checkEmailDtoOutPut checkSuccess() {
        return checkEmailDtoOutPut.builder()
                .message("이메일이 존재합니다.")
                .result("fail")
                .status(400)
        .build();
    }
    public checkEmailDtoOutPut checkFail() {
        return checkEmailDtoOutPut.builder()
                .message("이메일이 존재하지 않습니다.")
                .result("success")
                .status(200)
                .build();
    }
}
