import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import Header from './header';
import Main from './main'
import Footer from './footer';
import CreateSession from './create-session';
import Preloader from './preloader';
import { connect } from 'react-redux';
import {ActionCreator, Operation} from '../reducer';
import {history} from '../history.js';

const theme = {
  primary: `#3B5AF5`,
  secondary: `tomato`,
  pink: `#F9057C`,
  bgc: `white`,
  mobile: `660px`,
  font: `Poppins`,
};

const App = (props) => {
  const {isDataReady, sessions, createSession} = props;  
  if (!isDataReady) {
    return <Preloader/>;
  }

  return (
    <HashRouter history={history}>
    <ThemeProvider theme={theme}>      
        <Header/>
        <Route exact path="/">
          <Main sessions = {sessions}/>
        </Route>
        <Route exact path="/new">
          <CreateSession createSession={createSession}/>
        </Route>        
        <Footer/>      
    </ThemeProvider>
    </HashRouter>
  );
};

const mapStateToProps = (state) => ({
  isDataReady: state.SESSIONS.isDataReady,
  sessions: state.SESSIONS.sessions,
});

const mapDispatchToProps = (dispatch) => ({
  createSession(newSession) {
    dispatch(ActionCreator.createSession(newSession));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);