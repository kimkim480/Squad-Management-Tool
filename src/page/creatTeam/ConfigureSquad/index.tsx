import React from "react";

import {
  Container,
  Content,
  Field,
  Search,
  Card,
  Labels,
  Information,
  Name,
  Age,
  Nacionality,
} from "./styles";

export default function ConfigureSquad() {
  return (
    <Container>
      <h1>CONFIGURE SQUAD</h1>
      <Content>
        <Field>
          <label htmlFor="">Formation</label>
          <select name="formation" id="">
            <option value="442">4-4-2</option>
          </select>
          <button>SAVE</button>
        </Field>
        <Search>
          <label htmlFor="">Search Players</label>
          <input type="text" name="" id="" />

          <Card>
            <Name>
              <Labels>Name:</Labels>
              <Information>Cristiano Ronaldo</Information>
            </Name>

            <Age>
              <Labels>Age:</Labels>
              <Information>32</Information>
            </Age>

            <Nacionality>
              <Labels>Nacionality:</Labels>
              <Information>Portugal</Information>
            </Nacionality>
          </Card>
        </Search>
      </Content>
    </Container>
  );
}
