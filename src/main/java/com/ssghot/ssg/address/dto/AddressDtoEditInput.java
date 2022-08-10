package com.ssghot.ssg.address.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddressDtoEditInput {
    private Long id;
    private String alias;
    private String taker;
    private String phone;
    private String homePhone;
    private String city;
    private String street;
    private String zipcode;

}
