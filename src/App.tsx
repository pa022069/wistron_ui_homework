import { useState } from "react";
import SocialSignUp from "./components/SocialSignUp";
import { TitleBar } from './style';

const App = (): JSX.Element => {
  return (
    <div className="fullWrapper flex__cc">
      <div className="formWrapper">
        <div className="formWrapper__container">
          <h2 className="fontSize__lg font__normal">Start from free</h2>
          <h1 className="fontSize__3xl font__bold">Create an account</h1>
          <div className="col__two">
            <SocialSignUp type="google" />
            <SocialSignUp type="facebook" />
          </div>
          <div className="col__two">
            <p className="fontSize__sm">Or use your email for registration</p>
            <TitleBar />
          </div>
          <form action="">
            <div>123</div>
            <div>
              <div>
                <label htmlFor="form-checkbox" />
                <input type="checkbox" name="form-checkbox" id="form-checkbox" />
              </div>
              <p>By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings.</p>
            </div>
            <a>Create an Free Account!</a>
            <div>Already have an account?<a>Already have an account? Log in</a></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
