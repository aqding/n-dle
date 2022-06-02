import React, { Component } from "react";
import { useState, useEffect } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Main.css";
import LetterBlock from "../modules/LetterBlock";
import NewWord from "../modules/NewWord";
import GuessedWord from "../modules/GuessedWord";
import Keyboard from "../modules/Keyboard";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

const Main = ({ userId, handleLogin, handleLogout }) => {
  const [word, setWord] = useState("");
  const [guessedWords, setGuessedWords] = useState([]);
  const [won, setWon] = useState(false);
  const WORD_LENGTH = 5;
  const NUM_WORDS = 6;

  const TARGET_WORD = "allen";

  const handleEnter = () => {
    if (word.length === WORD_LENGTH) {
      setGuessedWords([...guessedWords, word]);
      if (word === TARGET_WORD) {
        console.log("YOU WIN!");
        setWon(true);
      }
      setWord("");
    }
  };

  const handleDel = () => {
    if (word.length > 0) setWord(word.slice(0, word.length - 1));
  };

  const handleLetter = (letter) => {
    if (word.length < WORD_LENGTH && guessedWords.length < NUM_WORDS)
      setWord(word + letter.toLowerCase());
  };

  const handleA = () => handleLetter("A");
  const handleB = () => handleLetter("B");
  const handleC = () => handleLetter("C");
  const handleD = () => handleLetter("D");
  const handleE = () => handleLetter("E");
  const handleF = () => handleLetter("F");
  const handleG = () => handleLetter("G");
  const handleH = () => handleLetter("H");
  const handleI = () => handleLetter("I");
  const handleJ = () => handleLetter("J");
  const handleK = () => handleLetter("K");
  const handleL = () => handleLetter("L");
  const handleM = () => handleLetter("M");
  const handleN = () => handleLetter("N");
  const handleO = () => handleLetter("O");
  const handleP = () => handleLetter("P");
  const handleQ = () => handleLetter("Q");
  const handleR = () => handleLetter("R");
  const handleS = () => handleLetter("S");
  const handleT = () => handleLetter("T");
  const handleU = () => handleLetter("U");
  const handleV = () => handleLetter("V");
  const handleW = () => handleLetter("W");
  const handleX = () => handleLetter("X");
  const handleY = () => handleLetter("Y");
  const handleZ = () => handleLetter("Z");

  const handlers = {
    a: handleA,
    b: handleB,
    c: handleC,
    d: handleD,
    e: handleE,
    f: handleF,
    g: handleG,
    h: handleH,
    i: handleI,
    j: handleJ,
    k: handleK,
    l: handleL,
    m: handleM,
    n: handleN,
    o: handleO,
    p: handleP,
    q: handleQ,
    r: handleR,
    s: handleS,
    t: handleT,
    u: handleU,
    v: handleV,
    w: handleW,
    x: handleX,
    y: handleY,
    z: handleZ,
    enter: handleEnter,
    delete: handleDel,
  };

  const keyboardHandler = (event) => {
    if (!won) {
      if (event.key === "Enter") {
        handleEnter();
      } else if (event.key.match(/[A-Za-z]/) && event.key.length === 1) {
        handleLetter(event.key);
      } else if (event.key === "Delete" || event.key === "Backspace") {
        handleDel();
      }
    }
  };

  return (
    <div className="mainContainer" onKeyDown={keyboardHandler} tabIndex="0">
      <div className="gridContainer">
        {guessedWords.map((guess) => (
          <GuessedWord word={guess} targetWord={TARGET_WORD} />
        ))}
        {guessedWords.length === 6 ? <></> : <NewWord word={word} wordLength={WORD_LENGTH} />}
        {[...new Array(Math.max(NUM_WORDS - guessedWords.length - 1, 0))].map((remainingGuess) => (
          <div>
            <NewWord word="" wordLength={WORD_LENGTH} />
          </div>
        ))}
      </div>
      <div className="keyboardContainer">
        <Keyboard handlers={handlers} word={TARGET_WORD} guesses={guessedWords} />
      </div>
    </div>
  );
};

export default Main;
