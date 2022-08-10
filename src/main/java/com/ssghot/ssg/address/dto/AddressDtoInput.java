package com.ssghot.ssg.address.dto;

import com.ssghot.ssg.address.domain.Address;
import com.ssghot.ssg.users.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddressDtoInput {

    private String alias;
    private String taker;
    private String phone;
    private String homePhone;
    private String city;
    private String street;
    private String zipcode;


    private Long userId;

    public Address toEntity(User user) {
        return Address.builder()
                .alias(getAlias())
                .taker(getTaker())
                .phone(getPhone())
                .homePhone(getHomePhone())
                .city(getCity())
                .street(getStreet())
                .zipcode(getZipcode())
                .user(user)
                .build();
    }

}


