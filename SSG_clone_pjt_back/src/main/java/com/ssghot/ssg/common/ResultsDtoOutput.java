package com.ssghot.ssg.common;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResultsDtoOutput<T> {
    private int status;
    private String message;
    private int size;
    private T data;
}


