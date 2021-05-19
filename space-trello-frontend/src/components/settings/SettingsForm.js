import React, { useState } from "react";
import { Button, Row, Form, Image } from "react-bootstrap";
import SettingsFormEditButton from "./SettingsFormEditButton";
import FormBase from "../helper/FormBase";
import FlexRow from "../helper/FlexRow";

const SettingsForm = ({ user }) => {
  const [formData, setFormData] = useState({
    name: "Jan",
    lastName: "Kowalski",
    email: "jan.kowalski@gmail.com",
    url: "https://thispersondoesnotexist.com/image",
  });
  const update = (e, key) => {
    setFormData(Object.assign({}, formData, { [key]: e.target.value }));
  };
  const [editName, setEditName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);

  return (
    <FormBase sm={12} md={10} lg={8} xl={7}>
      <Image
        src={formData.url}
        className="rounded-circle trello-settings-icon"
      />
      <div className="py-2">
        <p className="form-label trello-settings-label-font">IMIĘ</p>
        <FlexRow>
          <div className="w-75 ">
            <p className="trello-settings-font">{formData.name}</p>
          </div>
          <SettingsFormEditButton setEdit={setEditName} />
        </FlexRow>
      </div>
      <div className="py-2">
        <p className="form-label trello-settings-label-font">NAZWISKO</p>
        <FlexRow>
          <div className="w-75 ">
            <p className="trello-settings-font">{formData.lastName}</p>
          </div>
          <SettingsFormEditButton setEdit={setEditLastName} />
        </FlexRow>
      </div>
      <div className="py-2">
        <p className="form-label trello-settings-label-font">EMAIL</p>
        <FlexRow>
          <div className="w-75 ">
            <p className="trello-settings-font mt-3">{formData.email}</p>
          </div>
        </FlexRow>
      </div>
      {/* </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">NAZWISKO</Form.Label>
          <FlexRow>
            <Form.Control
              type="text"
              className="form-control trello-form-input w-75"
              value={formData.lastName}
              onChange={(e) => update(e, "lastName")}
              disabled={disabledLastName}
            />
            <SettingsFormEditButton />
          </FlexRow>
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">EMAIL</Form.Label>
          <Form.Control
            type="email"
            className="form-control trello-form-input w-75 "
            value={formData.email}
            disabled
          />
        </Form.Group> */}
      <div className="mt-4">
        <p className="trello-form-clickable text-align-left">ZMIEŃ HASŁO</p>
      </div>
    </FormBase>
  );
};

export default SettingsForm;
