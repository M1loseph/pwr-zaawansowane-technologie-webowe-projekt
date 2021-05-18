import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

const FormBase = ({ children }) => {
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol
          className="bg-trello-quaternary p-4 rounded"
          sm={10}
          md={8}
          lg={6}
          xl={5}
        >
          {children}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormBase;
