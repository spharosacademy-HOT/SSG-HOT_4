package com.ssghot.ssg.optionList.dto;

import com.ssghot.ssg.optionList.domain.OptionFirst;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StockDtoOutputOptFirstQty {

    private Long stockId;

    private int qty;

    private OptionFirst optionFirst;
}
