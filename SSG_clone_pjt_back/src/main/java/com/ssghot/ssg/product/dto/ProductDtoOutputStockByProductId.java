package com.ssghot.ssg.product.dto;

import com.ssghot.ssg.optionList.dto.StockDtoOutputProductIdName;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ProductDtoOutputStockByProductId {

    private Long id;
    private List<StockDtoOutputProductIdName> stock;
}
