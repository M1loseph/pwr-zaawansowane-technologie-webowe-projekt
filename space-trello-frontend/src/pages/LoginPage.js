import React from "react";
import Header from "../components/common/Header";
import Background from "../components/common/Background";
import LoginForm from "../components/login/LoginForm";

const LoginPage = () => {
  return (
    <Background>
      <Header />
      <LoginForm />
    </Background>
  );
};

export default LoginPage;
