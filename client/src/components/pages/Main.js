import React, { Component } from "react";
import { useState, useEffect } from "react";

import "../../utilities.css";
import "./Main.css";
import NewWord from "../modules/NewWord";
import GuessedWord from "../modules/GuessedWord";
import Keyboard from "../modules/Keyboard";
import WordCorpus from "../Corpus";

const Main = ({ wordLength, numWords }) => {
  const wordLengths = [4, 5, 6, 7];
  const [word, setWord] = useState("");
  const [guessedWords, setGuessedWords] = useState([]);
  const [won, setWon] = useState(false);
  const [WORD_LENGTH, setWordLength] = useState(wordLength);
  const NUM_WORDS = numWords;
  const [CORPUS, setCorpus] = useState(null);
  const [TARGET_WORD, setTargetWord] = useState("");
  const [ALERT, setAlert] = useState(false);
  const [GAME_STARTED, setGameStarted] = useState(false);

  useEffect(() => {
    WordCorpus.corpusFromPath(`/Corpora/${WORD_LENGTH}.txt`).then((newCorpus) => {
      setCorpus(newCorpus);
      setTargetWord(newCorpus.generateWord());
    });
  }, []);

  const raiseAlert = () => {
    if (ALERT) return;
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  const handleNewGame = () => {
    setGameStarted(false);
    setGuessedWords([]);
    setWon(false);
    setCorpus(null);
    setTargetWord("");
    setWord("");
    console.log("RESTARTING");
  };

  const startGame = (value) => {
    WordCorpus.corpusFromPath(`/Corpora/${value}.txt`).then((newCorpus) => {
      setWordLength(value);
      setCorpus(newCorpus);
      setTargetWord(newCorpus.generateWord());
      setGameStarted(true);
    });
  };

  const handleEnter = () => {
    if (word.length === WORD_LENGTH) {
      console.log("TARGET", TARGET_WORD);
      if (!CORPUS.containsWord(word)) {
        raiseAlert();
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

  const letter_handlers = Array.from(Array(26))
    .map((elt, index) => index)
    .map((x) => [String.fromCharCode(x + 97), () => handleLetter(String.fromCharCode(x + 65))]);
  const handlers = new Map([...letter_handlers, ["enter", handleEnter], ["delete", handleDel]]);

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

  return GAME_STARTED ? (
    <div className="mainContainer" onKeyDown={keyboardHandler} tabIndex="0">
      {ALERT ? <div className="alertContainer fadeAlert"> Invalid word!</div> : null};
      {guessedWords.length === 6 || won ? (
        <div className="answerContainer">
          <div> The word was: {TARGET_WORD.toUpperCase()}</div>
          <div onClick={handleNewGame}> Click to Play Again </div>
        </div>
      ) : null}
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
  ) : (
    <div className="mainContainer">
      <div className="gameSelectionContainer">
        <div>Select word length</div>
        {wordLengths.map((length) => {
          return (
            <div className="selectionBox" onClick={() => startGame(length)}>
              {" "}
              {length}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
