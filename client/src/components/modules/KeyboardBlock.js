import React, { useState, useEffect } from "react";

import "./KeyboardBlock.css";

const KeyboardBlock = ({ letter, color, func }) => {
  return (
    <div className={`keyboardBlock ${color}`} onClick={func}>
      {letter.toUpperCase()}
    </div>
  );
};

export default KeyboardBlock;
