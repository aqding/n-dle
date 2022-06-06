import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Main from "./pages/Main.js";
import Navbar from "./modules/Navbar.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Main path="/" wordLength={5} numWords={6} />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
