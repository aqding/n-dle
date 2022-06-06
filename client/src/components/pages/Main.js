import React, { Component } from "react";
import { useState, useEffect } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Main.css";
import LetterBlock from "../modules/LetterBlock";
import NewWord from "../modules/NewWord";
import GuessedWord from "../modules/GuessedWord";
import Keyboard from "../modules/Keyboard";
import WordCorpus from "../Corpus";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

const Main = ({ wordLength, numWords }) => {
  const [word, setWord] = useState("");
  const [guessedWords, setGuessedWords] = useState([]);
  const [won, setWon] = useState(false);
  const WORD_LENGTH = wordLength;
  const NUM_WORDS = numWords;
  console.log("word corpus: ", WordCorpus.corpusFromPath);
  let CORPUS;
  WordCorpus.corpusFromPath("Corpora/5.txt").then(newCorpus => {
    CORPUS = newCorpus;
    console.log("LIST IS:", newCorpus.wordList);
  });

  const TARGET_WORD = "deeps";

  const raiseAlert = (message) => {
    console.log("Word not in corpus!");
    /**
     * Todo: raise pop up box with message
     */
  }

  const handleEnter = () => {
    if (word.length === WORD_LENGTH) {
      if(!CORPUS.containsWord(word)){
        raiseAlert(`${word} not in corpus!`);
        return;
      }
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

  const letter_handlers = Array.from(Array(26)).map((elt, index) => index).map(x => [String.fromCharCode(x + 97), () => handleLetter(String.fromCharCode(x + 65))]);
  const handlers = new Map([...letter_handlers, ["enter", handleEnter],["delete", handleDel]])

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
        {guessedWords.length === NUM_WORDS ? (
          <></>
        ) : (
          <NewWord word={word} wordLength={WORD_LENGTH} />
        )}
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
