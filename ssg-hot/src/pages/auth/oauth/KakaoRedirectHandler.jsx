import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const KakaoRedirectHandler = () => {
  const navigate = useNavigate();

  // 인가코드
  const access_token = new URL(window.location.href).searchParams.get(
    "access_token"
  );

  useEffect(() => {
    const { id, username, roles, name } = jwtDecode(access_token);

    console.log(`id: ${id}`);
    if (access_token != null) {
      localStorage.setItem("token", access_token);

      sessionStorage.setItem("id", id);
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("roles", roles);
      sessionStorage.setItem("name", name);
      alert(`${name}님 반갑습니다.`);
      navigate("/");
    } else {
      alert(`소셜로그인을 실패하였습니다.`);
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <h1>test</h1>
      <h2>sss</h2>
    </div>
  );
};

export default KakaoRedirectHandler;
