import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormBase from "../helper/FormBase";
import FormHeader from "../common/FormHeader";
import FormMainButton from "../common/FormMainButton";
import FormFooter from "../common/FormFooter";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    passwordRepeated: "",
  });

  const update = (e, key) => {
    setFormData(Object.assign({}, formData, { [key]: e.target.value }));
  };

  return (
    <FormBase>
      <Form>
        <FormHeader>Stwórz konto</FormHeader>
        <Form.Group>
          <Form.Label className="form-label">IMIĘ</Form.Label>
          <Form.Control
            type="text"
            className="form-control trello-form-input"
            value={formData.name}
            onChange={(e) => update(e, "name")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">NAZWISKO</Form.Label>
          <Form.Control
            type="text"
            className="form-control trello-form-input"
            value={formData.lastName}
            onChange={(e) => update(e, "lastName")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">EMAIL</Form.Label>
          <Form.Control
            type="email"
            className="form-control trello-form-input"
            value={formData.email}
            onChange={(e) => update(e, "email")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">HASŁO</Form.Label>
          <Form.Control
            type="password"
            className="form-control trello-form-input"
            value={formData.password}
            onChange={(e) => update(e, "password")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">POWTÓRZ HASŁO</Form.Label>
          <Form.Control
            type="password"
            className="form-control trello-form-input"
            value={formData.passwordRepeated}
            onChange={(e) => update(e, "passwordRepeated")}
          />
        </Form.Group>
        <FormFooter>
          <FormMainButton>Zarejestruj się</FormMainButton>
        </FormFooter>
        <Link to="/" className="trello-form-clickable">
          Zaloguj się
        </Link>
      </Form>
    </FormBase>
  );
};

export default RegisterForm;
