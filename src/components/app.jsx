import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import Header from './header';
import Main from './main'
import Footer from './footer';
import CreateSession from './create-session';

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
    <HashRouter >
    <ThemeProvider theme={theme}>      
        <Header/>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/new">
          <CreateSession/>
        </Route>        
        <Footer/>      
    </ThemeProvider>
    </HashRouter>
  );
}

export default App;
