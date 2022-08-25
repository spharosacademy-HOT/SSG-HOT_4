package com.ssghot.ssg.address.dto;

import lombok.*;

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
    private int zipcode;

}
