package com.ssghot.ssg.optionList.service;

import com.ssghot.ssg.optionList.domain.OptionFirst;

import java.util.List;

public interface IOptionFirstService {

    /*
        1. 옵션1 등록하기
        2. 옵션1 수정하기
        3. 옵션1 조회하기
     */

    // 1. 옵션1 등록하기
    OptionFirst addOptionFirst(OptionFirst optionFirst);

    // 2. 옵션1 수정하기
    OptionFirst editOptionFirst(int id);

    // 3. 옵션1 조회하기
    List<OptionFirst> getAllOptionFirst();

}
