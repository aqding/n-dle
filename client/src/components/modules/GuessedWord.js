import React, { useState, useEffect } from "react";

import "./GuessedWord.css";
import LetterBlock from "./LetterBlock";

const GuessedWord = ({ word, targetWord }) => {
  const wordRep = [];
  for (let i = 0; i < word.length; i++) {
    let color = "";
    if (word[i] === targetWord[i]) color = "green";
    else if (targetWord.includes(word[i])) color = "yellow";
    else color = "grey";
    wordRep.push({ char: word[i], color: color });
  }
  return (
    <div className="guessedWordContainer">
      {wordRep.map((letter) => (
        <LetterBlock letter={letter.char} color={letter.color} />
      ))}
    </div>
  );
};

export default GuessedWord;
