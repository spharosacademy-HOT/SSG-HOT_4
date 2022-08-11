package com.ssghot.ssg.common;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResultDtoOutput<T> {
    private int status;
    private String message;

    private T data;
}
