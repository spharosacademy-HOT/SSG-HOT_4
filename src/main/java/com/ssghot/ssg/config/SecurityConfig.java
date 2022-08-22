package com.ssghot.ssg.config;

import com.ssghot.ssg.security.jwt.JwtAuthenticationFilter;
import com.ssghot.ssg.security.jwt.JwtAuthorizationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig  extends WebSecurityConfigurerAdapter {
    private final CorsFilter corsFilter;
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManagerBean());
        jwtAuthenticationFilter.setFilterProcessesUrl("/api/login");
        http.csrf().disable(); //rest api라서 csrf을 false 해도 ㄱㅊ
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)// 세션 id 방식 안씀
                .and()
                .addFilter(corsFilter) // @CrossOrigin(인증이 없을때 사용), 시큐리티 인증이 필요할때 필터로 등록
                .formLogin().disable() // security 로그인 page 안씀
                .httpBasic().disable() // authorization 에 id, pw를 넣는다 -> 단점: 매번 인증, 암호화 안되어 있음 -> bearer 방식 사용하기 위해
                .addFilter(jwtAuthenticationFilter) //AuthenticationManager 을 던져줌-> 로그인을 할려면
                .addFilterBefore(new JwtAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
        // 권한 모두 적용
        http.authorizeRequests()
                .anyRequest().permitAll();
    }
}
