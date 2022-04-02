import logo from "./logo.svg";
import "./App.css";
import { TextField, Button, Grid } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { InputAdornment } from "@material-ui/core";
import { AiFillGithub, AiOutlineSearch } from "react-icons/ai";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details/:name" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
