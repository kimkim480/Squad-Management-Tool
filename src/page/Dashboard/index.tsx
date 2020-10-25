import React from "react";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import MostPicked from "./Most-picked";
import MyTeam from "./My-team";

import { Container, Content } from "./styles";
import TopFive from "./Top-five";

export default function Dashboard() {
  return (
    <Container>
      <Heading label="Squad Management Tool" />
      <MyTeam />

      <Content>
        <TopFive />

        <MostPicked />
      </Content>

      <Footer label="2020 - All Rights Reserved" />
    </Container>
  );
}
