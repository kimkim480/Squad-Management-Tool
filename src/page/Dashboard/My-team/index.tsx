import React from "react";

import { Container, Header } from "./styles";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import TeamTable from "./teamTable";


export default function MyTeam() {

  return (
    <Container>
      <Header>
        <h1>My Team</h1>
        <Link to="/create">
          <FiPlus size={24} color="#fff" />
        </Link>
      </Header>

      {/* TABLE */}
      <TeamTable />
      


    </Container>
  );
}
