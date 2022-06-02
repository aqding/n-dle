import React, { useState, useEffect } from "react";

import "./LetterBlock.css";

const LetterBlock = ({ letter, color }) => {
  return (
    <div className="block">
      <p>{letter}</p>
    </div>
  );
};

export default LetterBlock;
