import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormBase from "../helper/FormBase";
import FormHeader from "../common/FormHeader";
import FormMainButton from "../common/FormMainButton";
import FormFooter from "../common/FormFooter";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  return (
    <FormBase>
      <Form>
        <FormHeader>Witaj w Space Trello!</FormHeader>
        <Form.Group>
          <Form.Label className="form-label">EMAIL</Form.Label>
          <Form.Control
            value={formData.email}
            onChange={(e) =>
              setFormData(
                Object.assign({}, formData, { email: e.target.value })
              )
            }
            type="email"
            className="form-control trello-form-input"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">HASŁO</Form.Label>
          <Form.Control
            type="password"
            className="form-control trello-form-input"
            value={formData.password}
            onChange={(e) =>
              setFormData(
                Object.assign({}, formData, { password: e.target.value })
              )
            }
          />
        </Form.Group>
        <FormFooter>
          <FormMainButton>Zaloguj się</FormMainButton>
        </FormFooter>
        <Link to="/register" className="trello-form-clickable">
          Zarejestruj się
        </Link>
      </Form>
    </FormBase>
  );
};

export default LoginForm;
