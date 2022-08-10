package com.ssghot.ssg.users.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResultListDtoOutput<T> {
    private int count;
    private T data;
}
