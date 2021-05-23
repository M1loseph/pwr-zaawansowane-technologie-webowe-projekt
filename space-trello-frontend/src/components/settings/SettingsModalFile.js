import React, { useState, useEffect, useRef } from "react";
import { Image, Modal } from "react-bootstrap";
import ConfirmButton from "../common/ConfirmButton";
import DiscardButton from "../common/DiscardButton";
import FormHeader from "../common/FormHeader";
import FlexRow from "../helper/FlexRow";

const SettingsModalFile = ({ onConfirm, onCancel, show, initialField }) => {
  const [file, setFile] = useState(null);
  useEffect(() => {
    setFile(initialField);
  }, []);
  const createLocalResource = (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result);
      setFile(reader.result);
    };
    reader.readAsDataURL(file);
  };

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
        <FormHeader>Wybierz zdjęcie profilowe</FormHeader>
        <FlexRow className="justify-content-center my-4">
          <Image
            src={file ?? initialField}
            className="rounded-circle trello-settings-icon "
          />
        </FlexRow>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={(e) => {
              createLocalResource(e);
            }}
          />
          <label className="custom-file-label" htmlFor="customFile">
            Wybierz zdjęcie
          </label>
        </div>
      </Modal.Body>
      <Modal.Footer className="trello-settings-modal">
        <ConfirmButton onClick={() => onConfirm(file)}>Zmień</ConfirmButton>
        <DiscardButton
          onClick={() => {
            onCancel();
          }}
        >
          Anuluj
        </DiscardButton>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingsModalFile;
