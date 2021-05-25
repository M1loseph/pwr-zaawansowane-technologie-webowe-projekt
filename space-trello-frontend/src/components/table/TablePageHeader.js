import React, { useState } from "react";
import UserIcon from "../common/UserIcon";
import AddUsersToTableModal from "./AddUsersToTableModal";
import EditableField from "./column/card/helper/EditableFiels";

const TablePageHeader = ({ users }) => {
  users = [
    {
      id: 1,
      src: "https://thispersondoesnotexist.com/image",
      name: "Michał",
      lastName: "Kowalski",
      color: "red",
    },
    {
      id: 2,
      src: "https://thispersondoesnotexist.com/image",
      name: "Ania",
      lastName: "Kowalska",
      color: "blue",
    },
    {
      id: 3,
      src: "https://thispersondoesnotexist.com/image",
      name: "Michał",
      lastName: "Kowalski",
      color: "orange",
    },
  ];

  const allUsers = [
    {
      id: 1,
      src: "https://thispersondoesnotexist.com/image",
      name: "Michał",
      lastName: "Kowalski",
      color: "red",
    },
    {
      id: 2,
      src: "https://thispersondoesnotexist.com/image",
      name: "Ania",
      lastName: "Kowalska",
      color: "blue",
    },
    {
      id: 3,
      src: "https://thispersondoesnotexist.com/image",
      name: "Michał",
      lastName: "Kowalski",
      color: "orange",
    },
    {
      id: 4,
      src: "https://thispersondoesnotexist.com/image",
      name: "Michał",
      lastName: "Kowalski",
      color: "red",
    },
    {
      id: 5,
      src: "https://thispersondoesnotexist.com/image",
      name: "Ania",
      lastName: "Kowalska",
      color: "blue",
    },
    {
      id: 6,
      src: "https://thispersondoesnotexist.com/image",
      name: "Michał",
      lastName: "Kowalski",
      color: "orange",
    },
    {
      id: 7,
      src: "https://thispersondoesnotexist.com/image",
      name: "Michał",
      lastName: "Kowalski",
      color: "orange",
    },
    {
      id: 8,
      src: "https://thispersondoesnotexist.com/image",
      name: "Michał",
      lastName: "Kowalski",
      color: "orange",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("Moja Todo Lista");

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
              {users.map((user) => (
                <UserIcon key={user.id} user={user} />
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
        allUsers={allUsers}
      />
    </React.Fragment>
  );
};

export default TablePageHeader;
