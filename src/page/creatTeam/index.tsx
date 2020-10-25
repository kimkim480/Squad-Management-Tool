import React from "react";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import ConfigureSquad from "./ConfigureSquad";

import { Container, Content, Header } from "./styles";
import TeamInformation from "./TeamInformation";

export default function creatTeam() {
  return (
    <Container>
      <Heading label="Squad Management Tool" />
      <Content>
        <Header>
          <h1>Create your team</h1>
        </Header>

        <TeamInformation />

        <ConfigureSquad />
      </Content>
      <Footer label="2020 - All Rights Reserved" />
    </Container>
  );
}
