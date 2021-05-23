import React from "react";
import Background from "../components/common/Background";
import Header from "../components/common/Header";
import SettingsView from "../components/settings/SettingsView";

const SettingsPage = ({ user }) => {
  return (
    <Background>
      <Header />
      <SettingsView user={user} />
    </Background>
  );
};

export default SettingsPage;
