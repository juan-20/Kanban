import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap'); */

*{
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  #__next, html{
  background: ${props => props.theme.colors.background};;
  height: 100vh;
  width: 100vw;
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

    /* modal style */
    .react-modal-overlay{
        background: rgba(0,0,0, 0.5);
        
        position: fixed;
        top: 0%;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center ;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: #f0f2f5;
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }

    }

        /* inputs */
        input{
            width: 90%;
            padding: 0 1.5rem;
            height: 4rem;
            border-radius: 0.25rem;

            border: 1px solid #d7d7d7;
            background: #e7e9ee;

            font-weight: 400;
            font-size: 1rem;

            & + input {
                margin-top: 1rem;
            }
        }
    select{
            width: 100%;
            padding: 0 1.5rem;
            border-radius: 0.25rem;
            text-overflow: ellipsis;
            border: 1px solid #d7d7d7;
            background: #e7e9ee;
            font-weight: 400;
            font-size: 1rem;
            text-align: center;

            & + input {
                margin-top: 1rem;
            }
        }

        select:hover{
            cursor: pointer;
        }

        input[type = "color"]{
            background: transparent;
            border: none;
        }

        button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: #33cc95;
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 3rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }


}

`;