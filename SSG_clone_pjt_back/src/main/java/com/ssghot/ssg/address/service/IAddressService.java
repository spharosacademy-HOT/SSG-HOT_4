package com.ssghot.ssg.address.service;

import com.ssghot.ssg.address.dto.*;
import com.ssghot.ssg.users.dto.ResultListDtoOutput;

import java.util.List;

public interface IAddressService {
    /*
        1. 배송지 추가
        2. 배송지 삭제
        3. 배송지 수정
        4. 배송지 기존 배송지로 변경
        5. 유저별 배송지 조회
        6. 전체 조회
        7. 기존 배송지 있는지 확인

     */
    AddressDtoOutput addAddress(AddressDtoInput address);

    void deleteAddress(Long id);

    AddressDtoOutput editAddress(AddressDtoEditInput addressDtoEditInput);

    AddressDtoExistedOutput changeExistedById(AddressDtoExistedInput addressDtoExistedInput);

    ResultListDtoOutput<List<AddressDtoOutput>> getAddressByUserId(Long userId);

    ResultListDtoOutput<List<AddressDtoOutput>> getAll();

    boolean getExistedAddressByUserId(Long userId);
}
