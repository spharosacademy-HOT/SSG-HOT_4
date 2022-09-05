package com.ssghot.ssg.auth.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssghot.ssg.auth.domain.PrincipalDetails;
import com.ssghot.ssg.security.jwt.JwtProperties;
import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.ssghot.ssg.security.jwt.JwtProperties.HEADER_STRING;
//@Slf4j
@RequiredArgsConstructor
@Service
public class RefreshService implements IRefreshService{
    private final IUserRepository iUserRepository;
    @Override
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String authorizationHeader = request.getHeader(HEADER_STRING);

        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")){
            try {
                String refresh_token = authorizationHeader.substring("Bearer ".length());
                DecodedJWT decodedJWT = JWT.require(Algorithm.HMAC512(JwtProperties.SECRET)).build().verify(refresh_token);
                String username = decodedJWT.getSubject();
                Optional<User> user = iUserRepository.findByEmail(username);
                if(user.isPresent()) {
//                    System.out.println(username);
                    PrincipalDetails principalDetails = new PrincipalDetails(user.get());
                    String access_token = JWT.create()
                            .withSubject(user.get().getEmail())
                            .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))
                            .withClaim("id", principalDetails.getUser().getId())
                            .withClaim("username", principalDetails.getUser().getEmail())
                            .withClaim("roles", principalDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                            .withClaim("name",principalDetails.getUser().getName())
                            .withIssuer(request.getRequestURI())
                            .sign(Algorithm.HMAC512(JwtProperties.SECRET));

                    Map<String, String> tokens = new HashMap<>();
                    tokens.put("access_token", access_token);
                    tokens.put("refresh_token", refresh_token);
                    response.setContentType(JwtProperties.APPLICATION_JSON_VALE);
                    new ObjectMapper().writeValue(response.getOutputStream(), tokens);
                }
            }catch (Exception exception){
                response.setHeader("error",exception.getMessage());
                response.setStatus(403);
                Map<String,String> error = new HashMap<>();
                error.put("error_message",exception.getMessage());
                response.setContentType(JwtProperties.APPLICATION_JSON_VALE);
                new ObjectMapper().writeValue(response.getOutputStream(),error);
            }
        }else {

            throw new RuntimeException("Refresh token is missing");
        }

    }
}
