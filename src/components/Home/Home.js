import React from "react";
import {
  Container,
  Button,
  Title,
  ContainerButtons,
  ButtonLevel,
} from "./Home.styles";

const Home = ({ onStartGame, gameOver, setDifficulty, difficulty }) => {
  return (
    <Container>
      {difficulty ? (
        <>
          {gameOver && (
            <Title>Congratulations, you have completed the game!</Title>
          )}
          <>
            <Title>
              {difficulty === 4
                ? "Easy Level"
                : difficulty === 6
                ? "Medium Level"
                : difficulty === 9 && "Difficult Level"}
            </Title>
            <Button onClick={onStartGame}>
              {gameOver ? "let's play again" : "Let´s Play"}
            </Button>
          </>
        </>
      ) : (
        <>
          <Title>Welcome, Select the difficulty!</Title>
          <ContainerButtons>
            <ButtonLevel onClick={() => setDifficulty(4)}>Level 1</ButtonLevel>
            <ButtonLevel onClick={() => setDifficulty(6)}>Level 2</ButtonLevel>
            <ButtonLevel onClick={() => setDifficulty(9)}>Level 3</ButtonLevel>
          </ContainerButtons>
        </>
      )}
    </Container>
  );
};

export { Home };
