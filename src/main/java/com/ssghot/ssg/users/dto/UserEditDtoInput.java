package com.ssghot.ssg.users.dto;

import lombok.Data;

@Data
public class UserEditDtoInput {

    private Long id;
    private String email;
    private String password;
    private String name;
    private String phone;
    private String birthday;
    private String city;
    private String street;
    private String zipcode;

}
