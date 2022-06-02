import React, { useState, useEffect } from "react";

import "./LetterBlock.css";

const LetterBlock = ({ letter, color }) => {
  return (
    <div className={`block ${color}`}>
      <p className="letter">{letter.toUpperCase()}</p>
    </div>
  );
};

export default LetterBlock;
