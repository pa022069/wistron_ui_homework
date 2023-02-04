import { useState } from "react";
import SocialSignUp from "./components/SocialSignUp";
import { TitleBar } from './utils/commonUtils';
import FormCheckbox from "./components/FormCheckbox";

const App = (): JSX.Element => {
  return (
    <div className="fullWrapper flex__cc">
      <div className="formWrapper">
        <div className="formWrapper__container">
          <h2 className="fontSize__lg font__normal">Start from free</h2>
          <h1 className="fontSize__3xl font__bold">Create an account</h1>
          <div className="col__2 col__2--wider">
            <SocialSignUp type="google" />
            <SocialSignUp type="facebook" />
          </div>
          <div className="col__2 col__2--normal">
            <p className="fontSize__sm col__2--fixed">Or use your email for registration</p>
            <TitleBar />
          </div>
          <form action="">
            <div>123</div>
            <FormCheckbox checked={false} text="By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings." />
            <a>Create an Free Account!</a>
            <p className="formWrapper__text font__normal">Already have an account? <a>Log in</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
