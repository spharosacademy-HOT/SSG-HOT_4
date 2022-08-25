package com.ssghot.ssg.oauth.provider;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Map;
@AllArgsConstructor
@NoArgsConstructor
public class GoogleUserInfo implements IOAuth2UserInfo{
    private Map<String, Object> attributes;

    @Override
    public String getProviderId() {
        return attributes.get("sub").toString();
    }

    @Override
    public String getProvider() {
        return "GOOGLE";
    }


    @Override
    public String getEmail() {
        return attributes.get("email").toString();
    }

    @Override
    public String getName() {
        return attributes.get("name").toString();
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
        return null;
    }
}
