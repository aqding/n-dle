import React, { useState, useEffect } from "react";

import KeyboardBlock from "./KeyboardBlock";
import "./Keyboard.css";
const Keyboard = () => {
  return (
    <div className="keyboardContainer">
      <div className="keyboardRowOdd">
        <KeyboardBlock letter="Q" />
        <KeyboardBlock letter="W" />
        <KeyboardBlock letter="E" />
        <KeyboardBlock letter="R" />
        <KeyboardBlock letter="T" />
        <KeyboardBlock letter="Y" />
        <KeyboardBlock letter="U" />
        <KeyboardBlock letter="I" />
        <KeyboardBlock letter="O" />
        <KeyboardBlock letter="P" />
      </div>
      <div className="keyboardRowEven">
        <KeyboardBlock letter="A" />
        <KeyboardBlock letter="S" />
        <KeyboardBlock letter="D" />
        <KeyboardBlock letter="F" />
        <KeyboardBlock letter="G" />
        <KeyboardBlock letter="H" />
        <KeyboardBlock letter="J" />
        <KeyboardBlock letter="K" />
        <KeyboardBlock letter="L" />
      </div>
      <div className="keyboardRowOdd">
        <KeyboardBlock letter="Enter" />
        <KeyboardBlock letter="Z" />
        <KeyboardBlock letter="X" />
        <KeyboardBlock letter="C" />
        <KeyboardBlock letter="V" />
        <KeyboardBlock letter="B" />
        <KeyboardBlock letter="N" />
        <KeyboardBlock letter="M" />
        <KeyboardBlock letter="Delete" />
      </div>
    </div>
  );
};

export default Keyboard;
