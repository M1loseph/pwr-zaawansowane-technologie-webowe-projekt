import React from "react";
import { Modal, Form } from "react-bootstrap";

const EditableField = ({ children, state, setState, key, displayKey }) => {
  displayKey = displayKey ?? key;

  return (
    <React.Fragment>
      {children}
      <Modal.Dialog>
        <Modal.Body>
          <Form></Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger">Anuluj</Button>
          <Button variant="primary">Zapisz</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </React.Fragment>
  );
};

export default EditableField;
