import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHovering } from "use-hovering";
import { getTableById } from "../../redux/tablesSlice";
import { deleteTableAPI, fetchTableAPI } from "../../redux/api";
import FlexRow from "../helper/FlexRow";
import { toBackgroundSrc } from "../../utils/imageUtils";
import { Modal } from "react-bootstrap";
import FormHeader from "../common/FormHeader";
import { FAILED, READY, RUNNING } from "../../redux/APIStates";

const TableTile = ({ tableId, allowDelete }) => {
  const dispatch = useDispatch();
  const rootRef = useRef(null);
  const hovering = useHovering(rootRef);
  const [show, setShow] = useState(false);
  const onCancel = () => setShow(false);
  const [allowDeleteButton, setAllowDeleteButton] = useState(false);
  const TIMEOUT = 2000;
  const table = useSelector((state) => getTableById(state, tableId));

  const deleteTable = () => {
    dispatch(deleteTableAPI(tableId));
    setShow(false);
  };

  const getBgImage = () => {
    if (table && table.status === READY) {
      return `url(${toBackgroundSrc(table.entity.img)})`;
    }
    return null;
  };

  useEffect(() => {
    if (show) {
      const handle = setTimeout(() => setAllowDeleteButton(true), TIMEOUT);
      return () => {
        clearTimeout(handle);
        setAllowDeleteButton(false);
      };
    }
  }, [show]);

  // table hasn't been fetched yet
  if (!table) {
    dispatch(fetchTableAPI(tableId));
    return <React.Fragment></React.Fragment>;
  }

  const entity = table.entity;

  return (
    <React.Fragment>
      <Link to={`/table/${tableId}`} className="m-3 my-5">
        <div
          className="trello-table-card rounded "
          style={{
            backgroundImage: getBgImage(),
          }}
          ref={rootRef}
        >
          {(() => {
            const { status } = table;
            if (status === READY) {
              return (
                <FlexRow className="w-100 trello-tables-page-font justify-content-between">
                  <div className="rounded m-2 p-1 trello-tile-title-bg ">
                    <h4 className="trello-tables-page-font m-0 my-1">
                      {entity.boardTitle}
                    </h4>
                  </div>
                  {allowDelete && hovering && (
                    <i
                      className="fas fa-trash fa-lg m-3"
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(true);
                      }}
                    ></i>
                  )}
                </FlexRow>
              );
            } else if (status === FAILED) {
              return (
                <div
                  className="d-flex items-align-center justify-content-center"
                  style={{ width: "100%", height: "100%" }}
                >
                  {"Failed to load :("}
                </div>
              );
            } else if (status === RUNNING) {
              <div
                className="d-flex items-align-center justify-content-center"
                style={{ width: "100%", height: "100%" }}
              ></div>;
            }
          })()}
        </div>
      </Link>
      <Modal
        show={show}
        onHide={onCancel}
        keyboard={true}
        animation={false}
        size={"md"}
        centered
      >
        <Modal.Body className="trello-settings-modal">
          <FormHeader>Czy jesteś pewien?</FormHeader>
          Akcja usunięcia tablicy jest nieodwracalna. Czy na pewno chcesz
          kontynuuować?
        </Modal.Body>
        <Modal.Footer className="trello-settings-modal">
          <button
            onClick={allowDeleteButton ? deleteTable : null}
            className={`btn ${
              show && allowDeleteButton
                ? "trello-btn-danger"
                : "trello-btn-danger-loading"
            }`}
          >
            Usuń
          </button>
          <button onClick={onCancel} className="btn trello-btn-cancel">
            Anuluj
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default TableTile;
