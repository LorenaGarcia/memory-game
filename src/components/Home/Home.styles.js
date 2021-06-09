import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background: #ffc123;
  box-shadow: 2px 2px 4px #000000;
  border: none;
  color: #ffffff;
  max-width: 20%;
  padding: 1rem;
  border-radius: 15px;
  font-family: "Staatliches", cursive;
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 480px) {
    max-width: 100%;
    width: 20rem;
  }
`;

const Title = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  color: #023346;
  font-weight: bold;
  text-align: center;
`;

const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonLevel = styled.button`
  background: #f39d31;
  box-shadow: 2px 2px 4px #000000;
  border: none;
  color: #ffffff;
  padding: 1rem;
  border-radius: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  margin: 1rem;
  height: 6rem;
`;

export { Container, Button, Title, ContainerButtons, ButtonLevel };
