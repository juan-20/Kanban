import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../types/Kanban';
import background from "../assets/BackgroundScene.svg";

export default createGlobalStyle<{theme: ThemeType}>`

@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,400;1,600&display=swap');

*{
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto Mono', monospace;
  }

  html{
    width: 100%;
    background: ${props => props.theme.colors.background};  
    /* background: url(${background}) */
  }
  
  main{
    margin-right: 30px;
    margin-left: 30px;
  }

ul{
        list-style-type: disc;
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0px
}

*, button, input {

    border: 0;
    outline: 0;

    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

}

`;