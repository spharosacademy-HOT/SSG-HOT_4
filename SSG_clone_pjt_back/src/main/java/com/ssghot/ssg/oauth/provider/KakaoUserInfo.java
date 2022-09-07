package com.ssghot.ssg.oauth.provider;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
public class KakaoUserInfo implements IOAuth2UserInfo{

    private Map<String, Object> attributes;
    private Map<String, Object> attributesAccount;
    private Map<String, Object> attributesProfile;
    public KakaoUserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
        this.attributesAccount = (Map<String, Object>) attributes.get("kakao_account");
        this.attributesProfile = (Map<String, Object>) attributesAccount.get("profile");
    }
    @Override
    public String getProviderId() {
        return attributes.get("id").toString();
    }


    @Override
    public String getProvider() {
        return "KAKAO";
    }


    @Override
    public String getEmail() {
        return  attributesAccount.get("email").toString();
    }


    @Override
    public String getName() {
        return  attributesProfile.get("nickname").toString();
    }

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    @Override
    public String getPhone() {
        return null;
    }

    @Override
    public String getId() {
        return null;
    }

    @Override
    public String getRoles() {
        return null;
    }
}
