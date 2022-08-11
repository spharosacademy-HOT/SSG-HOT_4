package com.ssghot.ssg.optionList.service;

import com.ssghot.ssg.optionList.domain.OptionSecond;

import java.util.List;

public interface IOptionSecondService {

    /*
        1. 옵션2 등록하기
        2. 옵션2 수정하기
        3. 옵션2 조회하기
     */

    // 1. 옵션2 등록하기
    OptionSecond addOptionSecond(OptionSecond optionSecond);

    // 2. 옵션2 수정하기
    OptionSecond editOptionSecond(int id, OptionSecond optionSecond);

    // 3. 옵션2 조회하기
    List<OptionSecond> getAllOptionSecond();
}
