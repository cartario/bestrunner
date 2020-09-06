import React from 'react';
import PropTypes from "prop-types";
import {HashRouter, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import Header from './header';
import Main from './main'
import Footer from './footer';
import CreateSession from './create-session';
import Preloader from './preloader';
import { connect } from 'react-redux';
import {ActionCreator} from '../reducer';
import {history} from '../history.js';
import {theme} from '../const';

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

App.propTypes = {
  isDataReady: PropTypes.bool.isRequired,
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      distance: PropTypes.number,
      date: PropTypes.instanceOf(Date).isRequired,
      comment: PropTypes.string.isRequired,
    })
  ),
  createSession: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
