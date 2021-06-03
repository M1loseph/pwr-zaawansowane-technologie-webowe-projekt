import React from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Background from "../components/common/Background";
import Header from "../components/common/Header";
import UserIcon from "../components/common/UserIcon";
import CreateTableButton from "../components/tables/CreateTableButton";
import TableTile from "../components/tables/TableTile";
import { getCurrentUser } from "../redux/userSlice";

const TablesMenuPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => getCurrentUser(state));
  if (user === undefined) {
    // TODO => fetch user from API
    // dispatch();
  }
  return (
    <Background>
      <Header>
        <Link to="/settings">
          <UserIcon userId={user.entity.userId} width={50} height={50} />
        </Link>
      </Header>
      <Container>
        <h2 className="trello-tables-page-font mb-3">Moje tablice</h2>
        <Row>
          {user.entity.ownedBoards.map((tableId) => (
            <TableTile key={tableId} tableId={tableId} allowDelete={true} />
          ))}
          <CreateTableButton />
        </Row>
        <h2 className="trello-tables-page-font mb-3">Współprace</h2>
        <Row>
          {user.entity.collaborationBoards.map((tableId) => (
            <TableTile key={tableId} tableId={tableId} />
          ))}
        </Row>
      </Container>
    </Background>
  );
};

export default TablesMenuPage;
