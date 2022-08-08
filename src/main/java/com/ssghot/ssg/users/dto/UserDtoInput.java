package com.ssghot.ssg.users.dto;

import com.ssghot.ssg.users.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDtoInput {

    private String email;
    private String password;
    private String name;
    private String phone;

    public User toEntity() {
        return User.builder()
                .email(getEmail())
                .password(getPassword())
                .name(getName())
                .phone(getPhone())
                .build();
    }

}

