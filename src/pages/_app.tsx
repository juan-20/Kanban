import type { AppProps } from 'next/app'
import { useState } from 'react';
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
        <GlobalStyles />
        <Navbar toggleTheme={toggleTheme} />
       <Component {...pageProps} />
     </ThemeProvider>
    )
}

export default MyApp
