import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { AuthFormWrapper } from './styledComponent';

const responseFacebook = (response) => {
  console.log(response);
}

const responseGoogle = (response) => {
  console.log(response);
}

const AuthForm: React.FC = () => {
  return(
  <AuthFormWrapper>
    <FacebookLogin
      appId="833822150435127"
      autoLoad={true}
      fields="name,email,picture"
      onClick={responseFacebook}
      callback={responseFacebook} />,
    <GoogleLogin
      clientId="1066411115726-q8irdkbiq5t7kkdk59h1otnia7l3q93j.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />,
  </AuthFormWrapper>
  )
};

export default AuthForm;