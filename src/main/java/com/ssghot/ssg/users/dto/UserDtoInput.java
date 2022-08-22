package com.ssghot.ssg.users.dto;

import com.ssghot.ssg.users.domain.User;
import lombok.*;

@Getter
@Builder
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDtoInput {

    private String email;
    private String password;
    private String name;
    private String phone;

    public User toEntity(String encode) {
        return User.builder()
                .email(getEmail())
                .password(encode)
                .name(getName())
                .phone(getPhone())
                .build();
    }

}

