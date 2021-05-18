import React from "react";
import Background from "../components/common/Background";
import Header from "../components/common/Header";
import SettingsForm from "../components/settings/SettingsForm";

const SettingsPage = () => {
  return (
    <Background>
      <Header />
      <SettingsForm />
    </Background>
  );
};

export default SettingsPage;
