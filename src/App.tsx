import { useCallback, useState } from "react";
import Button from "./components/ButtonStyle";
import Input from "./components/InputStyle";
import { TitleBar } from "./utils/commonUtils";
import FormCheckbox from "./components/FormCheckbox";
import { BsArrowLeft } from "react-icons/bs";
import { onSubmitFormApi } from "./api";
import { useMutation } from "@tanstack/react-query";

const App = (): JSX.Element => {
  const { data, mutate, isLoading } = useMutation({
    mutationFn: onSubmitFormApi,
  });
  const onSubmitForm = useCallback(
    async (element: React.FormEvent<HTMLFormElement>) => {
      element.preventDefault();
      const formData = element.currentTarget;
      const data = {
        firstName: formData.firstName.value,
        lastName: formData.lastName.value,
        email: formData.email.value,
        password: formData.password.value,
        checkbox: formData.checkbox.checked,
      };
      try {
        mutate(data);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  return (
    <div className="fullWrapper">
      <div className="formWrapper">
        <div className="formWrapper__back">
          <BsArrowLeft className="formWrapper__back--icon" />
          <p className="font__normal fontSize__sm">Back</p>
        </div>
        <div className="formWrapper__container">
          <h2 className="fontSize__lg font__normal">Start from free</h2>
          <h1 className="fontSize__3xl font__bold">Create an account</h1>
          <div className="col__2 col__2--wider">
            <Button.SocialSignUp disabled={isLoading} icon="google" />
            <Button.SocialSignUp disabled={isLoading} icon="facebook" />
          </div>
          <div className="col__2 col__2--normal">
            <p className="fontSize__sm font__normal col__2--fixed">
              Or use your email for registration
            </p>
            <TitleBar />
          </div>
          <form onSubmit={onSubmitForm}>
            <div className="col__2 col__2--wider">
              <Input.Default
                disabled={isLoading}
                type="text"
                name="firstName"
                id="firstName"
                title="First Name"
              />
              <Input.Default
                disabled={isLoading}
                type="text"
                name="lastName"
                id="lastName"
                title="Last Name"
              />
            </div>
            <div className="col__1">
              <Input.Default
                disabled={isLoading}
                type="email"
                name="email"
                id="email"
                title="E-mail"
              />
            </div>
            <div className="col__1">
              <Input.Password
                disabled={isLoading}
                type="password"
                name="password"
                id="password"
                title="Password"
              />
            </div>
            <FormCheckbox
              disabled={isLoading}
              text="By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings."
            />
            <div className="col__1">
              <Button.Default
                disabled={isLoading}
                type="submit"
                text="Create an Free Account!"
              />
            </div>
            <p className="formWrapper__text font__normal">
              Already have an account? <a>Log in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
