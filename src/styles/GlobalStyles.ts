import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


/* @import url('link do google fonts'); */

*{
    margin: 0px;
    box-sizing: border-box;
  }
  
  main{
    margin-right: 30px;
    margin-left: 30px;
  }

html, #root, body{
    height: 100vh;
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
    font-family: 'Poppins', sans-serif;

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