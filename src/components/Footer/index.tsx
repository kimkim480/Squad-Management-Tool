import React from 'react';

import { Container } from './styles';

interface Props {
  label: string;
}

export default function Footer({label}: Props) {
  return (
    <Container>
     {label}
    </Container>
  );
};


