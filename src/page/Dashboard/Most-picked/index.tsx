import React from "react";

import { Container, MostPickedPlayer, LessPickedPlayer, Line } from "./styles";

export default function MostPicked() {
  return (
    <Container>
      <MostPickedPlayer>
        <h1>Most Picked Player</h1>
        <p>75%</p>
        <div>
          <h1>CR</h1>
        </div>
      </MostPickedPlayer>
      <Line><div></div></Line> 
      <LessPickedPlayer>
        <h1>Less Picked Player</h1>
        <p>25%</p>
        <div>
          <h1>NJ</h1>
        </div>
      </LessPickedPlayer>
    </Container>
  );
}
