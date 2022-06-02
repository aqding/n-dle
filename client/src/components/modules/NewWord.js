import React, { useState, useEffect } from "react";

import "./NewWord.css";
import LetterBlock from "./LetterBlock";
const NewWord = ({ word, wordLength }) => {
  const wordRep = [];
  for (const letter of word) wordRep.push(letter);
  while (wordRep.length < wordLength) wordRep.push("");
  return (
    <div className="newWordContainer">
      {wordRep.map((letter) => (
        <LetterBlock letter={letter} />
      ))}
    </div>
  );
};

export default NewWord;
