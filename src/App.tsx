import { useState, useCallback } from "react";
import Button from "./components/ButtonStyle";
import Input from './components/InputStyle';
import { TitleBar } from './utils/commonUtils';
import FormCheckbox from "./components/FormCheckbox";

const App = (): JSX.Element => {

  const onSubmitForm = useCallback((element: React.FormEvent<HTMLFormElement>) => {
    element.preventDefault();
    const data = {
      firstName: element.target[0].value,
      lastName: element.target[1].value,
      email: element.target[2].value,
      password: element.target[3].value,
      checkbox: element.target[4].checked,
    }
    console.log('data', data)
  }, [])

  return (
    <div className="fullWrapper flex__cc">
      <div className="formWrapper">
        <div className="formWrapper__container">
          <h2 className="fontSize__lg font__normal">Start from free</h2>
          <h1 className="fontSize__3xl font__bold">Create an account</h1>
          <div className="col__2 col__2--wider">
            <Button.SocialSignUp icon="google" onClick={() => console.log('google')} />
            <Button.SocialSignUp icon="facebook" onClick={() => console.log('facebook')} />
          </div>
          <div className="col__2 col__2--normal">
            <p className="fontSize__sm col__2--fixed">Or use your email for registration</p>
            <TitleBar />
          </div>
          <form onSubmit={onSubmitForm}>
            <div className="col__2 col__2--wider">
              <Input.Default type="text" name="firstName" id="firstName" title="First Name" />
              <Input.Default type="text" name="lastName" id="lastName" title="Last Name" />
            </div>
            <div className="col__1">
              <Input.Default type="email" name="email" id="email" title="E-mail" />
            </div>
            <div className="col__1">
              <Input.Default type="password" name="password" id="password" title="Password" />
            </div>
            <FormCheckbox text="By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings." />
            <div className="col__1">
              <Button.Default type="submit" text="Create an Free Account!" />
            </div>
            <p className="formWrapper__text font__normal">Already have an account? <a>Log in</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
