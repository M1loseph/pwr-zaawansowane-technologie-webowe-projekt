import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import React from "react";

const LoginForm = () => {
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol className="bg-trello-quaternary p-4 rounded" md="4">
          <form>
            <p className="h4 text-center mb-4 text-white">
              Witaj w Space Trello!
            </p>
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="form-label">
              EMAIL
            </label>
            <input type="email" className="form-control trello-form-input" />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="form-label"
            >
              HASŁO
            </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control trello-form-input"
            />
            <div className="text-center mt-4">
              <MDBBtn color="green" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginForm;
