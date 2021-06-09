import React from "react";
import {
  Container,
  Button,
  Title,
  ContainerButtons,
  ButtonLevel,
} from "./Home.styles";

const Home = ({ startGame, gameOver, setDifficulty, difficulty }) => {
  return (
    <Container>
      {difficulty ? (
        <>
          {gameOver && (
            <Title>Congratulations, you have completed the game!</Title>
          )}
          <Button onClick={startGame}>
            {gameOver ? "let's play again" : "Let´s Play"}
          </Button>
        </>
      ) : (
        <>
          <Title>Welcome, Select the difficulty!</Title>
          <ContainerButtons>
            <ButtonLevel onClick={() => setDifficulty(4)}>Level 1</ButtonLevel>
            <ButtonLevel onClick={() => setDifficulty(8)}>Level 2</ButtonLevel>
            <ButtonLevel onClick={() => setDifficulty(9)}>Level 3</ButtonLevel>
          </ContainerButtons>
        </>
      )}
    </Container>
  );
};

export { Home };
