import React from "react";
import Header from "../components/common/Header";
import Background from "../components/common/Background";
import LoginForm from "../components/login/LoginForm";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const LoginPage = () => {
  const token = useSelector((s) => s.token);
  if (token !== null) return <Redirect to="/tables" />;

  return (
    <Background>
      <Header />
      <LoginForm />
    </Background>
  );
};

export default LoginPage;
