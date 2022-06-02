import React, { useState, useEffect } from "react";

import "./KeyboardBlockSpecial.css";

const KeyboardBlockSpecial = ({ type, func }) => {
  return (
    <div className="keyboardBlockSpecial" onClick={func}>
      {type}
    </div>
  );
};

export default KeyboardBlockSpecial;
