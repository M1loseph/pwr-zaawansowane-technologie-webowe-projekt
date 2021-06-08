import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTableAPI } from "../../redux/api";
import { READY } from "../../redux/APIStates";
import UserIcon from "../common/UserIcon";
import AddUsersToTableModal from "./AddUsersToTableModal";
import EditableField from "./column/card/helper/EditableFiels";

const TablePageHeader = ({ tableId }) => {
  const dispatch = useDispatch();
  const table = useSelector((s) =>
    s.tables.tables.find((t) => t.id === tableId)
  );

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState(table?.entity?.boardTitle ?? "");

  if (!table) {
    dispatch(fetchTableAPI(tableId));
  }

  useEffect(() => {
    if (table?.status === READY) {
      setTitle(table.entity.boardTitle);
    }
  }, [table]);

  if (table?.status === READY) {
    const { invitedUsers, owner } = table.entity;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row p-4">
            <div className="table-header p-3 rounded">
              <EditableField
                className="h2 mb-3 table-header-font"
                value={title}
                setValue={setTitle}
              />
              <div className="row">
                <UserIcon userId={owner} />
                <div className="bg-white mx-2" style={{ width: 3, height: 46 }} />
                {invitedUsers.map((id) => (
                  <UserIcon key={id} userId={id} />
                ))}
                <img
                  onClick={() => setShowModal(true)}
                  className={"ml-3 trello-clickable"}
                  src={"/assets/addUserToTable.svg"}
                  alt={"Add new user"}
                />
              </div>
            </div>
          </div>
        </div>
        <AddUsersToTableModal
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default TablePageHeader;
