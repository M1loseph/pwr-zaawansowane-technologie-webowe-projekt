import React, { useState, useEffect } from "react";
import { Form, Modal } from "react-bootstrap";
import ConfirmButton from "../common/ConfirmButton";
import DiscardButton from "../common/DiscardButton";
import FormHeader from "../common/FormHeader";

const SettingsModal = ({
  onConfirm,
  onCancel,
  initialField,
  show,
  title,
  label,
  type = "text",
}) => {
  const [field, setField] = useState(initialField);
  useEffect(() => {
    setField(initialField);
  }, [show]);

  return (
    <Modal
      show={show}
      onHide={onCancel}
      backdrop="static"
      keyboard={true}
      animation={false}
      size={"md"}
      centered
    >
      <Modal.Body className="trello-settings-modal">
        <Form>
          <FormHeader>{title}</FormHeader>
          <Form.Group>
            <Form.Label className="form-label">{label}</Form.Label>
            <Form.Control
              value={field}
              onChange={(e) => setField(e.target.value)}
              type={type}
              className="form-control trello-form-input"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="trello-settings-modal">
        <ConfirmButton onClick={() => onConfirm(field)}>Zmień</ConfirmButton>
        <DiscardButton onClick={onCancel}>Anuluj</DiscardButton>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingsModal;
