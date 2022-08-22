package com.ssghot.ssg.security.jwt;

public interface JwtProperties {
    String SECRET = "ssg-clone"; // 우리 서버만 알고 있는 비밀값
    int EXPIRATION_TIME = 10 * 60 * 1000; //10분
    String TOKEN_PREFIX = "Bearer ";
    String HEADER_STRING = "Authorization";

    int EXPIRATION_TIME_REFRESH = 30 * 60 * 1000;

    String APPLICATION_JSON_VALE = "application/json";
}
