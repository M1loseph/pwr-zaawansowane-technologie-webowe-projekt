import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormBase from "./helper/FormBase";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  return (
    <FormBase>
      <Form>
        <p className="h4 text-center mb-4 text-white">Witaj w Space Trello!</p>
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
        <div className="text-center mt-5 mb-3">
          <button
            type="button"
            className="w-100 btn trello-btn-primary m-0 mb-1"
          >
            Zaloguj się
          </button>
        </div>
        <Link to="/register" className="trello-form-clickable">
          Zarejestruj się
        </Link>
      </Form>
    </FormBase>
  );
};

export default LoginForm;
