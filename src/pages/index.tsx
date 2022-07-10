import React from "react";
import Board from "../components/Board/Board";
import Navbar from "../components/Navbar";

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