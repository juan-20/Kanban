import axios from 'axios';
import type { AppProps } from 'next/app'
import { useContext, useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ThemeProvider } from 'styled-components';
import Navbar from '../components/Navbar';
import GlobalStyles from '../styles/GlobalStyles';
import dark from '../styles/theme/dark';
import light from '../styles/theme/light';
import moveTo from 'immer'
import moveContext from '../components/Board/moveContext';
import { ListContext, ListContextProvider } from '../contexts/ListContext';

function MyApp({ Component, pageProps }: AppProps) {
  
  const [theme, setTheme] = useState(dark);
  const [list, setList] = useState(pageProps)

  console.log(list + 'hehehe')


  
  function move(fromList: number ,from: string, to: string){
 
    console.log(from, to, fromList, list)

    if(list === null)
    return console.error('ih não entrou');
    

    setList(moveTo(list, draft => {
      console.log(list)
      const dragged = draft[fromList].cards[from]

      draft[fromList].cards.splice(from,1)
      draft[fromList].cards.splice(to, 0, dragged)

    }))
  }

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark)
  }

  return(
    <ListContextProvider>
    <moveContext.Provider value={{list, move}}>
     <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
          <GlobalStyles />
          <Navbar toggleTheme={toggleTheme} />
        <Component {...pageProps} />
       </DndProvider>
     </ThemeProvider>
     </moveContext.Provider>
     </ListContextProvider>
    )
}


export async function getServerSideProps() {
  // Fetch data from external API
  const data = await axios.get('http://localhost:3000/api/list').then(response => {
    // setList(response.data.res);
    return response.data.res
  })
  return { props: { data } }
}

export default MyApp


