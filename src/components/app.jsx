import React from 'react';
import {ThemeProvider} from 'styled-components';
import Header from './header';
import Main from './main'
import Footer from './footer';

const theme = {
  primary: `#3B5AF5`,
  secondary: `tomato`,
  pink: `#F9057C`,
  bgc: `white`,
  mobile: `660px`,
  font: `Poppins`,
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
