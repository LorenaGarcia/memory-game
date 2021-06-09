import React from "react";
import { Container, Header, Main } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>Memory Game</Header>
      <Main>{children}</Main>
    </Container>
  );
};

export { Layout };
