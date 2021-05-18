import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormBase from "./helper/FormBase";

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
        <p className="h4 text-center mb-4 text-white">Stwórz konto</p>
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
        <div className="text-center mt-5 mb-3">
          <button
            type="button"
            className="w-100 btn trello-btn-primary m-0 mb-1"
          >
            Zarejestruj się
          </button>
        </div>
        <Link to="/" className="trello-form-clickable">
          Zaloguj się
        </Link>
      </Form>
    </FormBase>
  );
};

export default RegisterForm;
