package com.ssghot.ssg.cart.dto;

import com.ssghot.ssg.optionList.domain.OptionFirst;
import com.ssghot.ssg.optionList.domain.OptionSecond;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OptionListDtoOutput {
    private OptionFirst optionFirst;
    private OptionSecond optionSecond;
    private Long stockId;
}
