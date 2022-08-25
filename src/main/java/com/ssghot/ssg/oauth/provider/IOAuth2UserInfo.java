package com.ssghot.ssg.oauth.provider;

import java.util.Map;

public interface IOAuth2UserInfo {
    String getProviderId();
    String getProvider();
    String getEmail(); //username
    String getName();
    String getId();
    String getRoles();
    Map<String, Object> getAttributes();
    String getPhone();
}
