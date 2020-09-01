import React from 'react';
import {ThemeProvider} from 'styled-components';
import Header from './header';
import Footer from './footer';

const theme = {
  primary: `#3B5AF5`,
  secondary: `#F9057C`,
  bgc: `lightgrey`,
  mobile: `660px`,
  font: `Poppins`,
};

const Main = () => {
  return (
    <h1>Hello</h1>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      
        <Header/>
        <Main/>
        <Footer/>
      
    </ThemeProvider>
  );
}

export default App;
