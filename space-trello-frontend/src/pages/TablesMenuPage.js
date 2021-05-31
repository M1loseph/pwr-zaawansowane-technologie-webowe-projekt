import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Background from "../components/common/Background";
import Header from "../components/common/Header";
import UserIcon from "../components/common/UserIcon";
import CreateTableButton from "../components/tables/CreateTableButton";
import TableTile from "../components/tables/TableTile";

const TablesMenuPage = () => {
  const user = useSelector((state) =>
    state.users.find((u) => u.userId === state.user.userId)
  );
  return (
    <Background>
      <Header>
        <Link to="/settings">
          <UserIcon user={user} width={50} height={50} />
        </Link>
      </Header>
      <Container>
        <h2 className="trello-tables-page-font mb-3">Moje tablice</h2>
        <Row>
          {user.ownedBoards.map((tableId) => (
            <TableTile key={tableId} tableId={tableId} allowDelete={true} />
          ))}
          <CreateTableButton />
        </Row>
        <h2 className="trello-tables-page-font mb-3">Współprace</h2>
        <Row>
          {user.collaborationBoards.map((tableId) => (
            <TableTile key={tableId} tableId={tableId} />
          ))}
        </Row>
      </Container>
    </Background>
  );
};

export default TablesMenuPage;
