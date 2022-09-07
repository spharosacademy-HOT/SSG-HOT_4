package com.ssghot.ssg.address.dto;

import com.ssghot.ssg.address.domain.Address;
import com.ssghot.ssg.users.domain.User;
import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class AddressDtoInput {

    private String alias;
    private String taker;
    private String phone;
    private String homePhone;
    private String city;
    private String street;
    private boolean existed;
    private int zipcode;


    private Long userId;

    public Address toEntity(User user) {
        return Address.builder()
                .alias(getAlias())
                .taker(getTaker())
                .phone(getPhone())
                .homePhone(getHomePhone())
                .city(getCity())
                .existed(isExisted()?isExisted():false)
                .street(getStreet())
                .zipcode(getZipcode())
                .user(user)
                .build();
    }

}


