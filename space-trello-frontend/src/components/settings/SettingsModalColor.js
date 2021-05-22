import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ConfirmButton from "../common/ConfirmButton";
import DiscardButton from "../common/DiscardButton";
import FormHeader from "../common/FormHeader";
import { CirclePicker } from "react-color";

const SettingsModalColor = ({ onConfirm, onCancel, initialField, show }) => {
  const [color, setColor] = useState(initialField);
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
        <FormHeader>Wybierz kolor</FormHeader>
        <div className="w-100 d-flex justify-content-center flex-column align-items-center ">
          <div
            className="rounded-circle"
            style={{ backgroundColor: color, width: 100, height: 100 }}
          />
          <div className="my-3 mt-5">
            <CirclePicker
              color={color}
              onChange={(newColor) => setColor(newColor.hex)}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="trello-settings-modal">
        <ConfirmButton onClick={() => onConfirm(color)}>Zmień</ConfirmButton>
        <DiscardButton onClick={onCancel}>Anuluj</DiscardButton>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingsModalColor;
