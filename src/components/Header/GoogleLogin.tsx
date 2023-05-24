import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_LOGIN_API_KEY } from "../../config/google";

const GoogleLoginButton = ({
  onGoogleLogin,
  clientId = `${GOOGLE_LOGIN_API_KEY}.apps.googleusercontent.com`,
}: {
  onGoogleLogin: (userId: string, name: string) => void;
  clientId: string;
}) => {
  const onSuccess = async (response: any) => {
    const {
      profileObj: { googleId: userId, name },
    } = response;
    await onGoogleLogin(userId, name);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginButton;
