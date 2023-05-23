import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_LOGIN_API_KEY } from "../config/google";

const GoogleLoginButton = () => {
  const clientId = `${GOOGLE_LOGIN_API_KEY}.apps.googleusercontent.com`

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          buttonText='google logIn'
          onSuccess={(res) => {
            console.log(res);
          }}
          onFailure={(err) => {
            console.log(err);
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton
