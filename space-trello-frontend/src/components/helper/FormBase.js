import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

const FormBase = ({ children, sm, md, lg, xl }) => {
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol
          className="trello-form p-4 rounded"
          sm={sm ?? 10}
          md={md ?? 8}
          lg={lg ?? 6}
          xl={xl ?? 5}
        >
          {children}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormBase;
