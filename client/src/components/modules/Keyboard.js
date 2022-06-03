import React, { useState, useEffect } from "react";

import KeyboardBlock from "./KeyboardBlock";
import KeyboardBlockSpecial from "./KeyboardBlockSpecial";
import "./Keyboard.css";
const Keyboard = ({ handlers, word, guesses }) => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const colorMap = new Map();

  letters.map((letter) => colorMap.set(letter, "grey"));

  for (const guess of guesses) {
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === word[i]) colorMap.set(guess[i], "green");
      else if (word.includes(guess[i]) && colorMap.get(guess[i]) !== "green") {
        colorMap.set(guess[i], "yellow");
      } else if (
        !word.includes(guess[i]) &&
        colorMap.get(guess[i]) !== "green" &&
        colorMap.get(guess[i]) !== "yellow"
      )
        colorMap.set(guess[i], "darkGrey");
    }
  }

  const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const thirdRow = ["z", "x", "c", "v", "b", "n", "m"];

  return (
    <div className="keyboardContainer">
      <div className="keyboardRowOdd">
        {firstRow.map((letter) => (
          <KeyboardBlock letter={letter} func={handlers.get(letter)} color={colorMap.get(letter)} />
        ))}
      </div>
      <div className="keyboardRowEven">
        {secondRow.map((letter) => (
          <KeyboardBlock letter={letter} func={handlers.get(letter)} color={colorMap.get(letter)} />
        ))}
      </div>
      <div className="keyboardRowOdd">
        <KeyboardBlockSpecial type="ENTER" func={handlers.get("enter")} />
        {thirdRow.map((letter) => (
          <KeyboardBlock letter={letter} func={handlers.get(letter)} color={colorMap.get(letter)} />
        ))}
        <KeyboardBlockSpecial type="DELETE" func={handlers.get("delete")} />
      </div>
    </div>
  );
};

export default Keyboard;
