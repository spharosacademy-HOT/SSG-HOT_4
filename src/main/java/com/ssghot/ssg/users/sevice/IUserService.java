package com.ssghot.ssg.users.sevice;

import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.dto.UserDtoInput;
import com.ssghot.ssg.users.dto.UserDtoOutput;
import com.ssghot.ssg.users.dto.UserEditDtoInput;
import com.ssghot.ssg.users.dto.checkEmailDtoOutPut;

import java.util.List;

public interface IUserService {
    /*
        1. 회원가입
        2. 로그인
        3. 로그아웃
        4. 회원정보 수정
        5. 회원 탈퇴
        6. 소셜 로그인
    */

    // 중복 회원 검증
    void validateDuplicateUser(User user);

    // 회원 추가하기
    UserDtoOutput addUser(UserDtoInput user) ;

    // 회원 수정하기
    UserDtoOutput editUser(UserEditDtoInput userEditDtoInput) ;

    // 회원 삭제하기
    void deleteUser(Long id);

    // 회원 단일 조회
    UserDtoOutput getUserById(Long id);

    // 회원 전체 조회
    List<UserDtoOutput> getAll();

   checkEmailDtoOutPut checkUserEmail(String email);
}
