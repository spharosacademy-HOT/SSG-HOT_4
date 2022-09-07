package com.ssghot.ssg.users.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDtoOutput{
    private Long id;
    private String email;
    private String name;
    private String phone;
    private String memberLevel;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;


}


