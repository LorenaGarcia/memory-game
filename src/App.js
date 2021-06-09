import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import imageCard1 from "./images/card1.png";
import imageCard2 from "./images/card2.png";
import imageCard3 from "./images/card3.png";
import imageCard4 from "./images/card4.png";
import imageCard5 from "./images/card5.png";
import imageCard6 from "./images/card6.png";
import imageCard7 from "./images/card7.png";
import imageCard8 from "./images/card8.png";
import imageCard9 from "./images/card9.png";
import backCard from "./images/cover.png";

import { Layout } from "./components/Layout";
import { Game } from "./components/Game";
import { Home } from "./components/Home";

import { cards } from "./data/cards";

function App() {
  const [play, setPlay] = useState(false);
  const [disableImages, setDisableImages] = useState(false);
  const [difficulty, setDifficulty] = useState(0);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
    window.addEventListener(
      "touchmove",
      () => {
        AOS.refresh();
      },
      false
    );
  }, [disableImages]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      let tempCards = [...shuffledCards];
      const [firstCard, secondCard] = selectedCards;
      if (shuffledCards[firstCard].name === shuffledCards[secondCard].name) {
        tempCards[firstCard].solved = true;
        tempCards[secondCard].solved = true;
        setShuffledCards(tempCards);
        setSelectedCards([]);
      } else {
        setDisableImages(true);
        setTimeout(() => {
          tempCards[firstCard].front = false;
          tempCards[secondCard].front = false;
          setShuffledCards(tempCards);
          setSelectedCards([]);
          setDisableImages(false);
        }, 700);
      }

      setTimeout(() => {
        setGameOver(
          shuffledCards.find((element) => element.solved === false) ===
            undefined
            ? true
            : false
        );
      }, 800);
      setPlay(gameOver ? false : true);
    }
  }, [selectedCards]);

  function shufflingCards() {
    const cardByDifficulty = cards.slice(0, difficulty);

    let tempCards = [...cardByDifficulty, ...cardByDifficulty].map(
      ({ ...props }) => ({ ...props })
    );

    setShuffledCards([]);
    for (var i = tempCards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [tempCards[i], tempCards[j]] = [tempCards[j], tempCards[i]];
    }
    setShuffledCards(tempCards);
  }

  const cardImage = (name) => {
    switch (name) {
      case "card1":
        return imageCard1;
      case "card2":
        return imageCard2;
      case "card3":
        return imageCard3;
      case "card4":
        return imageCard4;
      case "card5":
        return imageCard5;
      case "card6":
        return imageCard6;
      case "card7":
        return imageCard7;
      case "card8":
        return imageCard8;
      case "card9":
        return imageCard9;
      default:
        return backCard;
    }
  };

  const onStartGame = () => {
    setPlay(true);
    setGameOver(false);
    setSelectedCards([]);
    shufflingCards();
  };

  const onSelectedCard = (idx) => {
    let tempCards = [...shuffledCards];
    tempCards[idx].front = true;
    setShuffledCards(tempCards);
    setSelectedCards((prevValue) => [...prevValue, idx]);
  };

  const onChangeLevel = () => {
    setPlay(false);
    setGameOver(false);
    setDifficulty(0);
  };

  return (
    <Layout>
      {play && !gameOver ? (
        <Game
          disableImages={disableImages}
          shuffledCards={shuffledCards}
          cardImage={cardImage}
          onSelectedCard={onSelectedCard}
          onStartGame={onStartGame}
          onChangeLevel={onChangeLevel}
        />
      ) : (
        <Home
          difficulty={difficulty}
          gameOver={gameOver}
          onStartGame={onStartGame}
          setDifficulty={setDifficulty}
        />
      )}
    </Layout>
  );
}

export default App;
