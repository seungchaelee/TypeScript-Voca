import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_LOGIN_API_KEY } from "../config/google";

const GoogleLoginButton = () => {
  const clientId = `${GOOGLE_LOGIN_API_KEY}.apps.googleusercontent.com`

  return (
    <>
      <GoogleOAuthProvider clientId={`${clientId}`}>
        <GoogleLogin
          clientId={`${clientId}`}
          onSuccess={(res) => console.log(res, '성공')}
          onFailure={(res) => console.log(res, '실패')}
          render={(renderProps) => (
            <div className='social_login_box google' onClick={renderProps.onClick}>
              <div className='social_login_image_box'>
                {/* <img src={googleIcon} alt='google_login' /> */}
              </div>
              <div className='social_login_text_box'>구글로 시작하기</div>
              <div className='social_login_blank_box'> </div>
            </div>
          )}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton;
