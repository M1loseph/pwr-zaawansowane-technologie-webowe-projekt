import React, { useState } from "react";
import { Button, Row, Form, Image } from "react-bootstrap";
import SettingsFormEditButton from "./SettingsFormEditButton";
import FormBase from "../helper/FormBase";
import FlexRow from "../helper/FlexRow";

const SettingsForm = () => {
  const [formData, setFormData] = useState({
    name: "Jan",
    lastName: "Kowalski",
    email: "jan.kowalski@gmail.com",
    url: "https://thispersondoesnotexist.com/image",
  });
  const update = (e, key) => {
    setFormData(Object.assign({}, formData, { [key]: e.target.value }));
  };

  const [disabledName, setDisabledName] = useState(true);
  const [disabledLastName, setDisabledLastName] = useState(true);

  return (
    <FormBase sm={12} md={12} lg={12} xl={10}>
      <Form>
        <Image
          src={formData.url}
          className="rounded-circle trello-settings-icon"
        />
        <Form.Group>
          <Form.Label className="form-label">IMIĘ</Form.Label>
          <FlexRow>
            <Form.Control
              type="text"
              className="form-control trello-form-input w-75"
              value={formData.name}
              onChange={(e) => update(e, "name")}
              disabled={disabledName}
            />
            <SettingsFormEditButton />
          </FlexRow>
        </Form.Group>
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
        </Form.Group>
        <div className="mt-4">
          <p className="trello-form-clickable text-align-left">ZMIEŃ HASŁO</p>
        </div>
      </Form>
    </FormBase>
  );
};

export default SettingsForm;
