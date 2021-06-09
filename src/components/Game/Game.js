import React from "react";
import { Container, Button, GridCards, Card, ImgBack } from "./Game.styles";
import backCard from "../../images/cover.png";

const Game = ({
  disableImages,
  onStartGame,
  onChangeLevel,
  shuffledCards,
  cardImage,
  onSelectedCard,
}) => {
  return (
    <Container>
      <Button onClick={onStartGame}>Reset</Button>
      <Button level={true} onClick={onChangeLevel}>
        Change Level
      </Button>
      <GridCards>
        {shuffledCards.map((value, idx) => (
          <Card key={idx}>
            {value.front ? (
              <ImgBack src={cardImage(value.name)} alt="card" />
            ) : (
              <ImgBack
                data-aos="flip-left"
                disableImages={disableImages}
                onClick={() => !disableImages && onSelectedCard(idx)}
                src={backCard}
                alt="card"
              />
            )}
          </Card>
        ))}
      </GridCards>
    </Container>
  );
};

export { Game };
