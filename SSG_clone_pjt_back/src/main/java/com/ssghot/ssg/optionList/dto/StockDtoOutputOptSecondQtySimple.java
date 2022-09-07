package com.ssghot.ssg.optionList.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StockDtoOutputOptSecondQtySimple {

    private Long stockId;

    private int qty;

    private int id;

    private String name;
}
