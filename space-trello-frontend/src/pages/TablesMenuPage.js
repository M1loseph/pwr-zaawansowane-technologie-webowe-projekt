import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Background from "../components/common/Background";
import Header from "../components/common/Header";
import UserIcon from "../components/common/UserIcon";
import TableTile from "../components/tables/TableTile";

const TablesMenuPage = ({ user }) => {
  user = {
    src: "https://thispersondoesnotexist.com/image",
    color: "magenta",
  };

  const tables = [
    {
      id: 1,
      bgImage:
        "https://i.pinimg.com/originals/14/13/5f/14135f3f98012d55c9fb758db3a11fb9.png",
      title: "Hello world",
    },
    {
      id: 2,
      bgImage:
        "https://i.pinimg.com/originals/14/13/5f/14135f3f98012d55c9fb758db3a11fb9.png",
      title: "Hello world",
    },
    {
      id: 3,
      bgImage:
        "https://i.pinimg.com/originals/14/13/5f/14135f3f98012d55c9fb758db3a11fb9.png",
      title: "Hello world",
    },
    {
      id: 4,
      bgImage:
        "https://i.pinimg.com/originals/14/13/5f/14135f3f98012d55c9fb758db3a11fb9.png",
      title: "Hello world",
    },
  ];

  const deleteTable = (id) => {
    console.log("deleteting id =>", id);
  };

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
          {tables.map((t) => (
            <TableTile key={t.id} table={t} deleteTable={deleteTable} />
          ))}
        </Row>
        <h2 className="trello-tables-page-font mb-3">Współprace</h2>
        <Row>
          {tables.map((t) => (
            <TableTile key={t.id} table={t} />
          ))}
        </Row>
      </Container>
    </Background>
  );
};

export default TablesMenuPage;
