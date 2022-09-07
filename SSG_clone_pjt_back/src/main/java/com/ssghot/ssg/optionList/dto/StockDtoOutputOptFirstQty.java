package com.ssghot.ssg.optionList.dto;

import com.ssghot.ssg.optionList.domain.OptionFirst;
import com.ssghot.ssg.optionList.domain.OptionSecond;
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

    private Long productId;

    private String productName;

    private String productDetail;

    private int discountPrice;

    private String titleImgUrl;

    private OptionSecond optionSecond;

    private OptionFirst optionFirst;

}
