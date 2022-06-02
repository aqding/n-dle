import React, { useState, useEffect } from "react";

import "./KeyboardBlock.css";

const KeyboardBlock = ({ letter, color }) => {
  return <div className="keyboardBlock">{letter}</div>;
};

export default KeyboardBlock;
