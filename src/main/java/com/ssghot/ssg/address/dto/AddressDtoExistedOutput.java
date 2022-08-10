package com.ssghot.ssg.address.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddressDtoExistedOutput {

    private String result;
    private int status;
    private String message;

}
