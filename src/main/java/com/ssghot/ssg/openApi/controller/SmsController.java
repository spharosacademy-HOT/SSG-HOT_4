package com.ssghot.ssg.openApi.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssghot.ssg.openApi.dto.MessageDto;
import com.ssghot.ssg.openApi.dto.SmsResponseDto;
import com.ssghot.ssg.openApi.service.SmsService;
import com.ssghot.ssg.users.sevice.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

@RestController
@RequestMapping("/api/sms")
@RequiredArgsConstructor
public class SmsController {
    private final SmsService smsService;
    private final IUserService iUserService;
    @PostMapping("/send")
    public SmsResponseDto sendSms(@RequestBody MessageDto messageDto) throws JsonProcessingException, RestClientException, URISyntaxException, NoSuchAlgorithmException, UnsupportedEncodingException, InvalidKeyException {
        if(messageDto.getTo().length()==11){
            boolean phoneValid = iUserService.checkUserPhone(messageDto.getTo());
            if(!phoneValid) {
                SmsResponseDto response = smsService.sendSms(messageDto);
                return response;
            }
            return SmsResponseDto.builder().statusCode("400").statusName("이미 사용중인 휴대폰번호입니다. 아이디찾기 페이지로 이동하시겠습니까?").build();
        }
        return SmsResponseDto.builder().statusCode("400").statusName("휴대폰 번호가 유효하지않습니다. 11자를 맞쳐주세요").build();
    }
}
