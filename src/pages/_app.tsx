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

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(dark);


  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark)
  }

  return(
     <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
          <GlobalStyles />
          <Navbar toggleTheme={toggleTheme} />
        <Component  {...pageProps} />
       </DndProvider>
     </ThemeProvider>
    )
}

export default MyApp


