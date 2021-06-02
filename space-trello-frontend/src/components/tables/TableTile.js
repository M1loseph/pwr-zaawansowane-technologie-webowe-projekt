import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { useHovering } from "use-hovering";
import { fetchTable } from "../../redux/tablesSlice";
import { deleteTableAPI } from "../../redux/api";
import FlexRow from "../helper/FlexRow";
import { toBackgroundSrc } from "../../utils/imageUtils";
import { Modal } from "react-bootstrap";
import FormHeader from "../common/FormHeader";

const TableTile = ({ tableId, allowDelete }) => {
  const dispatch = useDispatch();
  const table = useSelector((state) =>
    state.tables.find((t) => t.boardId === tableId)
  );
  const rootRef = useRef(null);
  const hovering = useHovering(rootRef);
  const [show, setShow] = useState(false);
  const onCancel = () => setShow(false);
  const [allowDeleteButton, setAllowDeleteButton] = useState(false);
  const TIMEOUT = 2000;

  if (!table) {
    dispatch(fetchTable(tableId));
  }

  const deleteTable = () => {
    dispatch(deleteTableAPI(tableId));
    setShow(false);
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

  return (
    <React.Fragment>
      <Link to={`/table/${tableId}`} className="m-3 my-5">
        <div
          className="trello-table-card rounded "
          style={{
            backgroundImage: table
              ? `url(${toBackgroundSrc(table.img)})`
              : null,
          }}
          ref={rootRef}
        >
          {!!table && (
            <FlexRow className="w-100 trello-tables-page-font justify-content-between">
              <div className="rounded m-2 p-1 trello-tile-title-bg ">
                <h4 className="trello-tables-page-font m-0 my-1">
                  {table.boardTitle}
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
          )}
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
