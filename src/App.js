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

const cards = [
  { solved: false, front: false, name: "card1" },
  { solved: false, front: false, name: "card2" },
  { solved: false, front: false, name: "card3" },
  { solved: false, front: false, name: "card4" },
  { solved: false, front: false, name: "card5" },
  { solved: false, front: false, name: "card6" },
  { solved: false, front: false, name: "card7" },
  { solved: false, front: false, name: "card8" },
  { solved: false, front: false, name: "card9" },
];

function App() {
  const [play, setPlay] = useState(false);
  const [difficulty, setDifficulty] = useState(0);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [temporaryCards, setTemporaryCards] = useState([
    { card1: null, card2: null },
  ]);

  console.log(cards.slice(0, difficulty));

  useEffect(() => {
    AOS.init({
      duration: 2000,
      dataAosOffset: 400,
    });
    window.addEventListener(
      "touchmove",
      () => {
        AOS.refresh();
      },
      false
    );
  }, []);

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

  const startGame = () => {
    setPlay(true);
    setGameOver(false);
    shufflingCards(difficulty);
  };

  const selectCard = (id) => {
    let tempCards = [...shuffledCards];
    tempCards[id].front = true;
    setShuffledCards(tempCards);

    if (temporaryCards[0].card1) {
      console.log("card2");
      temporaryCards[0].card2 = id;
      setTemporaryCards(temporaryCards);
      if (
        shuffledCards[temporaryCards[0].card1].name ===
        shuffledCards[temporaryCards[0].card2].name
      ) {
        tempCards[temporaryCards[0].card1].solved = true;
        tempCards[temporaryCards[0].card2].solved = true;
        setShuffledCards(tempCards);
        setTemporaryCards([{ card1: null, card2: null }]);
        setTimeout(() => {
          setGameOver(
            shuffledCards.find((element) => element.solved === false) ===
              undefined
              ? true
              : false
          );
        }, 700);
        setPlay(gameOver ? false : true);
        console.log("listo");
      } else if (
        shuffledCards[temporaryCards[0].card1].name !==
        shuffledCards[temporaryCards[0].card2].name
      ) {
        setTimeout(() => {
          tempCards[temporaryCards[0].card1].front = false;
          tempCards[temporaryCards[0].card2].front = false;
          setShuffledCards(tempCards);
          setTemporaryCards([{ card1: null, card2: null }]);
        }, 700);
        console.log("listo");
      }
    } else if (!temporaryCards[0].card2) {
      console.log("card1");
      temporaryCards[0].card1 = id;
      setTemporaryCards(temporaryCards);
    }
  };

  return (
    <Layout>
      {play && !gameOver ? (
        <Game
          shuffledCards={shuffledCards}
          cardImage={cardImage}
          selectCard={selectCard}
        />
      ) : (
        <Home
          difficulty={difficulty}
          gameOver={gameOver}
          startGame={startGame}
          setDifficulty={setDifficulty}
        />
      )}
    </Layout>
  );
}

export default App;
