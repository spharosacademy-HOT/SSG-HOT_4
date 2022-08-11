package com.ssghot.ssg.product.dto;

import com.ssghot.ssg.optionList.domain.Stock;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ProductDtoOutputStockByProductId {

    private Long id;
    private List<Stock> stock;
}
