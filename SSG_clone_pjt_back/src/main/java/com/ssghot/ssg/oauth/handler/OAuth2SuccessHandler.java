package com.ssghot.ssg.oauth.handler;


import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.ssghot.ssg.auth.domain.PrincipalDetails;
import com.ssghot.ssg.security.jwt.JwtProperties;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Component
public class OAuth2SuccessHandler  extends SimpleUrlAuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
        String access_token = JWT.create()
                .withSubject(principalDetails.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))
                .withClaim("id", principalDetails.getUser().getId())
                .withClaim("name",principalDetails.getUser().getName())
                .withClaim("username", principalDetails.getUser().getEmail())
                .withClaim("roles", principalDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .withIssuer(request.getRequestURI().toString())
                .sign(Algorithm.HMAC512(JwtProperties.SECRET));
        String refresh_token = JWT.create()
                .withSubject(principalDetails.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME_REFRESH))
                .withIssuer(request.getRequestURI().toString())
                .sign(Algorithm.HMAC512(JwtProperties.SECRET));

        String redirectUri = "https://ssghot.shop/oauth/redirect";


        String targetUrl = UriComponentsBuilder.fromUriString(redirectUri)
                .queryParam("access_token", access_token)
                .queryParam("refresh_token", refresh_token)
                .build().toString();

        if (response.isCommitted()) {
//            logger.debug("Response has already been committed. Unable to redirect to " + targetUrl);
            return;
        }
        getRedirectStrategy().sendRedirect(request, response, targetUrl);
    }
}
