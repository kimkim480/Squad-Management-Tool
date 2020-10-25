import React from "react";

import { HeadingBar, Profile } from "./styles";

import Logo from "../../images/logo.svg";

interface Props {
  label: string;
}

export default function Heading({label}: Props) {
  return (
    <HeadingBar>
      <img src={Logo} alt="Venturus" />
      <h1>{label}</h1>
      <Profile>
        Eric Alves <div>EA</div>
      </Profile>
    </HeadingBar>
  );
}
