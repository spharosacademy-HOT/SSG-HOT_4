package com.ssghot.ssg.auth.controller;

import com.ssghot.ssg.auth.service.IRefreshService;
import com.ssghot.ssg.users.dto.UserDtoInput;
import com.ssghot.ssg.users.dto.UserDtoOutput;
import com.ssghot.ssg.users.dto.checkEmailDtoOutPut;
import com.ssghot.ssg.users.dto.emailInputDto;
import com.ssghot.ssg.users.sevice.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final IRefreshService iRefreshService;
    private final IUserService iUserService;
    @GetMapping("/token/refresh")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        iRefreshService.refreshToken(request,response);
    }
    @PostMapping("/email")
    public checkEmailDtoOutPut checkUserEmail(@RequestBody emailInputDto emailInputDto){
        return iUserService.checkUserEmail(emailInputDto.getEmail());
    }
    @PostMapping("")
    public UserDtoOutput addUser(@RequestBody UserDtoInput user) {
        return iUserService.addUser(user);
    }
//    @PostMapping("/auth/kakao")
//    public KakaoDtoOutput addKakao(@RequestBody KakaoDtoInput kakaoDtoInput){
//        kakaoDtoInput.getAuthorizationCode();
//
//    }
}