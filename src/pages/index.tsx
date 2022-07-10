import { NextPage } from "next";
import React from "react";
import Board from "../Components/Board/Board";
import Navbar from "../Components/Navbar";
import App from "./_app";

interface props {
  toggleTheme(): void;
}


function Home({ toggleTheme }: props) {
  return (
  <>
    <Navbar toggleTheme={toggleTheme} /> 
    <Board />
  </>
  );
}

export default Home