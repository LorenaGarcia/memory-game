import React from "react";
import { Container, Card, ImgBack } from "./Game.styles";
import backCard from "../../images/cover.png";

const Game = ({ shuffledCards, cardImage, selectCard }) => {
  return (
    <Container>
      {shuffledCards.map((value, idx) => (
        <Card key={idx} data-aos="flip-left">
          {value.name}
          {value.front ? (
            <ImgBack src={cardImage(value.name)} alt="card" />
          ) : (
            <ImgBack
              onClick={() => selectCard(idx)}
              src={backCard}
              alt="card"
            />
          )}
        </Card>
      ))}
    </Container>
  );
};

export { Game };
