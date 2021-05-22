import React, { useState } from "react";
import { Button, Row, Form, Image } from "react-bootstrap";
import SettingsFormEditButton from "./SettingsFormEditButton";
import FormBase from "../helper/FormBase";
import FlexRow from "../helper/FlexRow";
import SettingsFormGroup from "./SettingsFormGroup";
import SettingsFormLabel from "./SettingsFormLabel";
import SettingsFormInput from "./SettingsFormInput";
import SettingsFromInput from "./SettingsFormInput";

const SettingsForm = ({ user }) => {
  const [formData, setFormData] = useState({
    name: "Jan",
    lastName: "Kowalski",
    email: "jan.kowalski@gmail.com",
    url: "https://thispersondoesnotexist.com/image",
    color: "#258162",
  });
  const update = (e, key) => {
    setFormData(Object.assign({}, formData, { [key]: e.target.value }));
  };
  const [editName, setEditName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);

  return (
    <FormBase sm={12} md={10} lg={8} xl={7}>
      <FlexRow>
        <Image
          src={formData.url}
          className="rounded-circle trello-settings-icon"
        />
        <div className="ml-5">
          <SettingsFormLabel>Preferowany kolor</SettingsFormLabel>
          <div
            className="rounded-circle trello-settings-color-container mt-2"
            style={{ backgroundColor: formData.color }}
          ></div>
        </div>
      </FlexRow>
      <SettingsFormGroup>
        <SettingsFormLabel>IMIĘ</SettingsFormLabel>
        <FlexRow>
          <SettingsFormInput>{formData.name}</SettingsFormInput>
          <SettingsFormEditButton setEdit={setEditName} />
        </FlexRow>
      </SettingsFormGroup>
      <SettingsFormGroup>
        <SettingsFormLabel>NAZWISKO</SettingsFormLabel>
        <FlexRow>
          <SettingsFromInput>{formData.lastName}</SettingsFromInput>
          <SettingsFormEditButton setEdit={setEditLastName} />
        </FlexRow>
      </SettingsFormGroup>
      <SettingsFormGroup>
        <SettingsFormLabel>EMAIL</SettingsFormLabel>
        <FlexRow>
          <SettingsFormInput className="mt-2">
            {formData.email}
          </SettingsFormInput>
        </FlexRow>
      </SettingsFormGroup>
      <div className="mt-4">
        <p className="trello-form-clickable text-align-left">ZMIEŃ HASŁO</p>
      </div>
    </FormBase>
  );
};

export default SettingsForm;
