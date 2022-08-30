package com.ssghot.ssg.users.sevice;

import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.dto.*;
import org.springframework.http.HttpHeaders;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface IUserService {
    /*
        1. 회원가입
        2. 로그인
        3. 로그아웃
        4. 회원정보 수정
        5. 회원 탈퇴
        6. 소셜 로그인
        7. 회원 전화번호 확인
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
    ResultListDtoOutput<List<UserDtoOutput>> getAll();

   checkEmailDtoOutPut checkUserEmail(String email);

    void addRoleToUser(String username, String roleName);

    boolean checkUserPhone(String phone);

    Long getUserByToken(HttpServletRequest request);
    Long getUserByTokenFix(HttpHeaders headers);
}
