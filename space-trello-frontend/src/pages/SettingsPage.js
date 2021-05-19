import React from "react";
import Background from "../components/common/Background";
import Header from "../components/common/Header";
import SettingsForm from "../components/settings/SettingsForm";

const SettingsPage = ({ user }) => {
  return (
    <Background>
      <Header />
      <SettingsForm user={user} />
    </Background>
  );
};

export default SettingsPage;
