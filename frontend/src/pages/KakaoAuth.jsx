import React, { useEffect } from "react";
import qs from "qs";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { authAtom, userIdAtom, userImage } from "../states";
import { useNavigate } from "react-router";
import swal from "sweetalert";

function KakaoAuth() {
  const REST_API_KEY = process.env.REACT_APP_KAKAKO_KEY;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const code = new URL(window.location.href).searchParams.get("code");
  const setAuth = useSetRecoilState(authAtom)
  const setUid = useSetRecoilState(userIdAtom)
  const setUimg = useSetRecoilState(userImage)
  const navigate = useNavigate()

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    try {
      // access token 가져오기
      const res = await axios.post("https://kauth.kakao.com/oauth/token", payload);

      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      const data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      const result = await axios.post("/auth/find", {
        email: data.kakao_account.email,
        nickName: data.properties.nickname,
        profileImage: data.kakao_account.profile.thumbnail_image_url,
        kakaoId: data.id
      });
      console.log(result)
      localStorage.setItem("user", JSON.stringify(result.data));
      setAuth(true)
      setUid(result.data.uid)
      setUimg(result.data.uimg)
      swal("로그인 성공", "로그인되었습니다.", "success").then(() => navigate("/"));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return null;
}

export default KakaoAuth;
