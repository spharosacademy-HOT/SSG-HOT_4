package com.ssghot.ssg.address.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddressDtoOutput {

    private Long id;
    private String alias;
    private String taker;
    private String phone;
    private String homePhone;
    private String city;
    private String street;
    private int zipcode;
    private boolean existed;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    private Long userId;
}
