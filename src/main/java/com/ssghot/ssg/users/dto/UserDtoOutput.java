package com.ssghot.ssg.users.dto;

import com.ssghot.ssg.users.domain.Address;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDtoOutput {
    private String email;
    private String name;
    private String type;
    private List<Address> addressList;

}


