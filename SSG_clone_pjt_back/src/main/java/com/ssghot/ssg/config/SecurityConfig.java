package com.ssghot.ssg.config;

import com.ssghot.ssg.oauth.handler.OAuth2SuccessHandler;
import com.ssghot.ssg.oauth.service.PrincipalOauth2UserService;
import com.ssghot.ssg.security.jwt.JwtAuthenticationFilter;
import com.ssghot.ssg.security.jwt.JwtAuthorizationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig  extends WebSecurityConfigurerAdapter {
    private final CorsFilter corsFilter;
    private final OAuth2SuccessHandler oAuth2SuccessHandler;
    private final PrincipalOauth2UserService principalOauth2UserService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManagerBean());
        jwtAuthenticationFilter.setFilterProcessesUrl("/api/login");
        http.csrf().disable(); //rest api라서 csrf을 false 해도 ㄱㅊ
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)// 세션 id 방식 안씀
                .and()
                .cors().configurationSource(corsConfigurationSource())
                .and()
//                .addFilter(corsFilter) // @CrossOrigin(인증이 없을때 사용), 시큐리티 인증이 필요할때 필터로 등록
                .formLogin().disable() // security 로그인 page 안씀
                .httpBasic().disable() // authorization 에 id, pw를 넣는다 -> 단점: 매번 인증, 암호화 안되어 있음 -> bearer 방식 사용하기 위해
                .addFilter(jwtAuthenticationFilter) //AuthenticationManager 을 던져줌-> 로그인을 할려면
                .addFilterBefore(new JwtAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests()
                .anyRequest().permitAll()
                .and().oauth2Login()
                .authorizationEndpoint()
                .baseUri("/oauth2/authorize")
                .and()
                .userInfoEndpoint()
                .userService(principalOauth2UserService)
                .and()
                .successHandler((request, response, authentication) ->  {
                    oAuth2SuccessHandler.onAuthenticationSuccess(request,response,authentication);
                });
    }
    @Bean
    public CorsConfigurationSource corsConfigurationSource(){

        CorsConfiguration configuration = new CorsConfiguration();

        configuration.addAllowedOriginPattern("*");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
