import KakaoLogin from "react-kakao-login";

const KakaoLoginButton = ({
  kakaoClientId= 'JavaScript KEY',
}: {
  kakaoClientId: string;
}) => {
  const kakaoOnSuccess = (data: any) => {
    console.log(data)
    // const idToken = data.response.id_token  // 인가코드 백엔드로 전달
  }
  const kakaoOnFailure = (error: any) => {
    console.log(error);
  };
  return (
    <>
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </>
  )
}

export default KakaoLoginButton;
