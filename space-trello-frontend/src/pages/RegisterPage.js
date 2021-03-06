import React from "react";
import Background from "../components/common/Background";
import Header from "../components/common/Header";
import RegisterForm from "../components/registration/RegisterForm";

const RegisterPage = () => {
  return (
    <Background>
      <Header />
      <RegisterForm />
    </Background>
  );
};

export default RegisterPage;
