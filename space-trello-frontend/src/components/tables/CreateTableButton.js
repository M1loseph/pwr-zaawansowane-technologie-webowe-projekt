import React, { useEffect, useRef, useState } from "react";
import { Form, Image, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ConfirmButton from "../common/ConfirmButton";
import DiscardButton from "../common/DiscardButton";
import FormHeader from "../common/FormHeader";
import FlexRow from "../helper/FlexRow";
import Selectable from "./Selectable";
import { createTableAPI } from "../../redux/api";

const CreateTableButton = () => {
  const defaultFormData = { title: "", description: "", background: 1 };
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);
  const reset = () => setFormData(defaultFormData);
  const assign = (obj) => setFormData(Object.assign({}, formData, obj));
  const [availableImages, setAvailableImages] = useState({});

  useEffect(() => {
    let cancelled = false;
    const fetchAvaiableImages = async () => {
      const response = await fetch("/api/board/backgrounds");
      const data = await response.json();
      setAvailableImages(data);
    };
    fetchAvaiableImages();
    return () => (cancelled = true);
  }, []);

  const cancelHandle = () => setShow(false);
  const createHandle = () => {
    dispatch(createTableAPI(formData));
    cancelHandle();
  };

  return (
    <React.Fragment>
      <div
        onClick={() => {
          reset();
          setShow(true);
        }}
        className="trello-table-card rounded trello-clickable trello-add-table m-3 my-5 d-flex justify-content-center align-items-center"
      >
        <Image width={25} className="mr-2" src="/assets/addTableIcon.svg" />
        Dodaj nową tablicę
      </div>

      <Modal
        show={show}
        onHide={cancelHandle}
        keyboard={true}
        animation={false}
        size={"md"}
        centered
      >
        <Modal.Body className="trello-settings-modal">
          <Form>
            <FormHeader>Stwórz nową tablicę</FormHeader>
            <Form.Group>
              <Form.Label className="form-label">Tytuł</Form.Label>
              <Form.Control
                value={formData.title}
                onChange={(e) => assign({ title: e.target.value })}
                type="text"
                className="form-control trello-form-input"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-label">Opis</Form.Label>
              <Form.Control
                value={formData.description}
                onChange={(e) => assign({ description: e.target.value })}
                as="textarea"
                rows={5}
                className="form-control trello-form-input"
              />
            </Form.Group>
            <FlexRow
              className="w-100 flex-wrap justify-content-around"
              style={{ maxHeight: 300, overflow: "auto" }}
            >
              {Object.keys(availableImages).map((k) => (
                <Selectable
                  key={k}
                  selected={formData.background === parseInt(k)}
                  onClick={() => {
                    assign({ background: parseInt(k) });
                  }}
                >
                  <Image
                    className="img-fluid rounded"
                    src={`/upload-images/board/${availableImages[k]}`}
                  />
                </Selectable>
              ))}
            </FlexRow>
          </Form>
        </Modal.Body>
        <Modal.Footer className="trello-settings-modal">
          <ConfirmButton onClick={createHandle}>Stwórz</ConfirmButton>
          <DiscardButton onClick={cancelHandle}>Anuluj</DiscardButton>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default CreateTableButton;
