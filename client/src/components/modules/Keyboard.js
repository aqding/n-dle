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
  return (
    <div className="keyboardContainer">
      <div className="keyboardRowOdd">
        <KeyboardBlock letter="Q" func={handlers.q} color={colorMap.get("q")} />
        <KeyboardBlock letter="W" func={handlers.w} color={colorMap.get("w")} />
        <KeyboardBlock letter="E" func={handlers.e} color={colorMap.get("e")} />
        <KeyboardBlock letter="R" func={handlers.r} color={colorMap.get("r")} />
        <KeyboardBlock letter="T" func={handlers.t} color={colorMap.get("t")} />
        <KeyboardBlock letter="Y" func={handlers.y} color={colorMap.get("y")} />
        <KeyboardBlock letter="U" func={handlers.u} color={colorMap.get("u")} />
        <KeyboardBlock letter="I" func={handlers.i} color={colorMap.get("i")} />
        <KeyboardBlock letter="O" func={handlers.o} color={colorMap.get("o")} />
        <KeyboardBlock letter="P" func={handlers.p} color={colorMap.get("p")} />
      </div>
      <div className="keyboardRowEven">
        <KeyboardBlock letter="A" func={handlers.a} color={colorMap.get("a")} />
        <KeyboardBlock letter="S" func={handlers.s} color={colorMap.get("s")} />
        <KeyboardBlock letter="D" func={handlers.d} color={colorMap.get("d")} />
        <KeyboardBlock letter="F" func={handlers.f} color={colorMap.get("f")} />
        <KeyboardBlock letter="G" func={handlers.g} color={colorMap.get("g")} />
        <KeyboardBlock letter="H" func={handlers.h} color={colorMap.get("h")} />
        <KeyboardBlock letter="J" func={handlers.j} color={colorMap.get("j")} />
        <KeyboardBlock letter="K" func={handlers.k} color={colorMap.get("k")} />
        <KeyboardBlock letter="L" func={handlers.l} color={colorMap.get("l")} />
      </div>
      <div className="keyboardRowOdd">
        <KeyboardBlockSpecial type="ENTER" func={handlers.enter} />
        <KeyboardBlock letter="Z" func={handlers.z} color={colorMap.get("z")} />
        <KeyboardBlock letter="X" func={handlers.x} color={colorMap.get("x")} />
        <KeyboardBlock letter="C" func={handlers.c} color={colorMap.get("c")} />
        <KeyboardBlock letter="V" func={handlers.v} color={colorMap.get("v")} />
        <KeyboardBlock letter="B" func={handlers.b} color={colorMap.get("b")} />
        <KeyboardBlock letter="N" func={handlers.n} color={colorMap.get("n")} />
        <KeyboardBlock letter="M" func={handlers.m} color={colorMap.get("m")} />
        <KeyboardBlockSpecial type="DELETE" func={handlers.delete} />
      </div>
    </div>
  );
};

export default Keyboard;
