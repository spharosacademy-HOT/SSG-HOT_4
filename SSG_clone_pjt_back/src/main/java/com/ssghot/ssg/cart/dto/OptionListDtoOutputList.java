package com.ssghot.ssg.cart.dto;

import com.ssghot.ssg.optionList.domain.OptionFirst;
import com.ssghot.ssg.optionList.domain.OptionSecond;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OptionListDtoOutputList {
    private List<OptionFirst> optionFirsts;
    private List<OptionSecond> optionSeconds;
}
