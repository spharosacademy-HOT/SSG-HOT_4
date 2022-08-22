package com.ssghot.ssg.auth.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public interface IRefreshService {
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;


}
