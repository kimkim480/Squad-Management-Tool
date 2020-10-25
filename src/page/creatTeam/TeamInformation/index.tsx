import React from "react";

import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { Container, Form, FirstColumn, SecondColumn, Radio } from "./styles";

export default function TeamInformation() {
  return (
    <Container>
      <h1>TEAM INFORMATION</h1>

      <Form>
        <FirstColumn>
          <label htmlFor="">Team Name</label>
          <input placeholder="Insert team name" type="text" />

          <label htmlFor="">Description</label>
          <textarea name="" id="" cols={30} rows={10}></textarea>
        </FirstColumn>

        <SecondColumn>
          <label htmlFor="">Team Website</label>
          <input type="url" placeholder="https:///myteam.com" />

          <label htmlFor="">Team Type</label>
          <Radio>
            <input type="radio" name="teamType" />
            <label htmlFor=""> Real </label>
            <input type="radio" name="teamType" />
            <label htmlFor=""> Fantasy</label>
          </Radio>

          <label htmlFor="">Tags</label>
          <Autocomplete
            multiple
            id="tags"
            options={[]}
            defaultValue={[]}
            freeSolo
            renderTags={(value: string[], getTagProps) =>
              value.map((option: string, index: number) => (
                <Chip
                  color="secondary"
                  variant="default"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} variant="standard" />
            )}
          />
        </SecondColumn>
      </Form>
    </Container>
  );
}
