package com.ssghot.ssg.oauth.provider;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Map;
@AllArgsConstructor
@NoArgsConstructor
public class NaverUserInfo implements IOAuth2UserInfo{
    private Map<String, Object> attributes;
    @Override
    public String getProviderId() {
        return attributes.get("id").toString();
    }

    @Override
    public String getProvider() {
        return "NAVER";
    }

    @Override
    public String getEmail() {
        return  attributes.get("email").toString();
    }

    @Override
    public String getName() {
        return  attributes.get("name").toString();
    }

    @Override
    public String getId() {
        return null;
    }

    @Override
    public String getRoles() {
        return null;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    @Override
    public String getPhone() {
        String[] mobiles = attributes.get("mobile").toString().split("-");
        return String.join("", mobiles);
    }
}
