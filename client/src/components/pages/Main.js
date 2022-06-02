import React, { Component } from "react";
import { useState, useEffect } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Main.css";
import LetterBlock from "../modules/LetterBlock";
import NewWord from "../modules/NewWord";
import GuessedWord from "../modules/GuessedWord";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

const Main = ({ userId, handleLogin, handleLogout }) => {
  const [word, setWord] = useState("");
  const [guessedWords, setGuessedWords] = useState([]);
  const [won, setWon] = useState(false);
  const WORD_LENGTH = 5;
  const NUM_WORDS = 6;

  const TARGET_WORD = "allen";

  const keyboardHandler = (event) => {
    if (!won) {
      if (event.key === "Enter") {
        if (word.length === WORD_LENGTH) {
          setGuessedWords([...guessedWords, word]);
          if (word === TARGET_WORD) {
            console.log("YOU WIN!");
            setWon(true);
          }
          setWord("");
        }
      } else if (event.key.match(/[A-Za-z]/) && event.key.length === 1) {
        if (word.length < WORD_LENGTH && guessedWords.length < NUM_WORDS)
          setWord(word + event.key.toLowerCase());
      } else if (event.key === "Delete" || event.key === "Backspace") {
        if (word.length > 0) setWord(word.slice(0, word.length - 1));
      }
    }
  };

  return (
    <div className="mainContainer" onKeyDown={keyboardHandler} tabIndex="0">
      <div className="gridContainer">
        {guessedWords.map((guess) => (
          <GuessedWord word={guess} targetWord={TARGET_WORD} />
        ))}
        <NewWord word={word} wordLength={WORD_LENGTH} />
        {[...new Array(Math.max(NUM_WORDS - guessedWords.length - 1, 0))].map((remainingGuess) => (
          <div>
            <NewWord word="" wordLength={WORD_LENGTH} />
          </div>
        ))}
      </div>
      <div className="keyboardContainer"></div>
    </div>
  );
};

export default Main;
