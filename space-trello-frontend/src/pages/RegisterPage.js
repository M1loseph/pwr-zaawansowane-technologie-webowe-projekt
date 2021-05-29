import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Background from "../components/common/Background";
import Header from "../components/common/Header";
import RegisterForm from "../components/registration/RegisterForm";

const RegisterPage = () => {
  const token = useSelector((s) => s.token);
  if (token !== null) return <Redirect to="/tables" />;

  return (
    <Background>
      <Header />
      <RegisterForm />
    </Background>
  );
};

export default RegisterPage;
