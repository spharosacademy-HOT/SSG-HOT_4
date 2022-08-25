package com.ssghot.ssg.order.dto;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class OrderDtoInputDetail {
    private Long id;
    private Long userId;
}
