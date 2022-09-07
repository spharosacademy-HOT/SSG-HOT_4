package com.ssghot.ssg.oauth.service;

import com.ssghot.ssg.auth.domain.PrincipalDetails;
import com.ssghot.ssg.oauth.provider.GoogleUserInfo;
import com.ssghot.ssg.oauth.provider.IOAuth2UserInfo;
import com.ssghot.ssg.oauth.provider.KakaoUserInfo;
import com.ssghot.ssg.oauth.provider.NaverUserInfo;
import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PrincipalOauth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final IUserRepository iUserRepository;


    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService delegate = new DefaultOAuth2UserService();

        OAuth2User oAuth2User = delegate.loadUser(userRequest);

        IOAuth2UserInfo ioAuth2UserInfo = null;
        if(userRequest.getClientRegistration().getRegistrationId().equals("google")){
            ioAuth2UserInfo = new GoogleUserInfo(oAuth2User.getAttributes());
        }else if (userRequest.getClientRegistration().getRegistrationId().equals("naver")) {
            ioAuth2UserInfo = new NaverUserInfo((Map) oAuth2User.getAttributes().get("response"));
        }else if (userRequest.getClientRegistration().getRegistrationId().equals("kakao")) {
            ioAuth2UserInfo = new KakaoUserInfo(oAuth2User.getAttributes());
        }else{
//            System.out.println("아직 제공하지 않습니다.");
        }
        String provider = ioAuth2UserInfo.getProvider();
        String providerId = ioAuth2UserInfo.getProviderId();
        String username = ioAuth2UserInfo.getEmail();
        if(username==null){
            username = provider+"_"+providerId;
        }
        String name = ioAuth2UserInfo.getName();
        String phone = ioAuth2UserInfo.getPhone();
        if(phone==null){
            phone = "00000000000";
        }
        String password = bCryptPasswordEncoder.encode("secret");

        Optional<User> userEntity = iUserRepository.findByEmail(username);
        if(userEntity.isEmpty()){
            User user = User.builder()
                    .email(username)
                    .password(password)
                    .name(name)
                    .phone(phone)
                    .provider(provider)
                    .build();
            User newUser = iUserRepository.save(user);
            return new PrincipalDetails(newUser,oAuth2User.getAttributes());
        }
        return new PrincipalDetails(userEntity.get(),oAuth2User.getAttributes());
    }
}