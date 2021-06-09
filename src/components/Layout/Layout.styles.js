import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main";
`;

const Header = styled.div`
  grid-area: header;
  background-image: linear-gradient(#1f5d76, #2f9292);
  color: #ffffff;
  font-family: "Staatliches", cursive;
  font-size: 50px;
  padding: 1rem 0;
  text-align: center;
`;

const Main = styled.div`
  grid-area: main;
  display: flex;
  align-items: flex-start;
  background: #2f9292;
`;

export { Container, Header, Main };
