import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import SettingsFormEditButton from "./SettingsFormEditButton";
import FormBase from "../helper/FormBase";
import FlexRow from "../helper/FlexRow";
import SettingsFormGroup from "./SettingsFormGroup";
import SettingsFormLabel from "./SettingsFormLabel";
import SettingsFormInput from "./SettingsFormInput";
import SettingsFromInput from "./SettingsFormInput";
import SettingsModal from "./SettingsModal";
import SettingsModalColor from "./SettingsModalColor";

const SettingsForm = ({ user }) => {
  const [formData, setFormData] = useState({
    name: "Jan",
    lastName: "Kowalski",
    email: "jan.kowalski@gmail.com",
    url: "https://thispersondoesnotexist.com/image",
    color: "#F58162",
  });

  const [editName, setEditName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);
  const [editColor, setEditColor] = useState(false);

  return (
    <React.Fragment>
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
              onClick={() => setEditColor(true)}
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
      <SettingsModal
        title={"Edytuj imię"}
        label={"IMIĘ"}
        onConfirm={(value) => {
          console.log(value);
          setEditName(false);
        }}
        onCancel={() => {
          setEditName(false);
        }}
        show={editName}
        type={"text"}
        initialField={formData.name}
      />
      <SettingsModal
        title={"Edytuj nazwisko"}
        label={"NAZWISKO"}
        onConfirm={(value) => {
          console.log(value);
          setEditLastName(false);
        }}
        onCancel={() => setEditLastName(false)}
        show={editLastName}
        type={"text"}
        initialField={formData.lastName}
      />
      <SettingsModalColor
        show={editColor}
        onCancel={() => setEditColor(false)}
        onConfirm={(value) => {
          console.log(value);
          setEditColor(false);
        }}
        initialField={formData.color}
      />
    </React.Fragment>
  );
};

export default SettingsForm;
