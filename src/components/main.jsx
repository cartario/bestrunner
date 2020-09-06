import React, {useState} from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import Sessions from './sessions';
import Filter from './filter';
import Chart from './chart';
import {Link} from 'react-router-dom';
import {getSortedSessions} from '../utils';
import {Pages, SortType} from '../const';

const Wrapper = styled.main`
  text-align: center;
  font-family: ${props=>props.theme.font}; 
  background-color: white; 
`;

const Title = styled.h1`
  display: none;
`;

const Button = styled.button`
  position: fixed;  
  z-index: 1;
  bottom: 20px;
  right: 30px;
  display: block;
  width: 100px;
  height: 100px;
  font-size: 50px;
  background-color: ${props=>props.theme.pink};
  outline: none;
  border: none;
  color: white;
  border-radius: 50%;  
  transition: 0.5s transform ease;

  &:hover{
    transform: scale(1.5);
  }

  &:active{
    background-color: grey;
  }
`;

const Main = ({sessions}) => {
  const [sortUp, setSortUp] = useState(true); 
  const [sortTarget, setSortTarget] = useState(SortType.DATE);
  const [filterType, setFilterType] = useState(SortType.ALL);

  let filteredSessions;
  if(filterType === SortType.ALL){    
    filteredSessions = sessions;
  } else {
    filteredSessions = sessions.filter((session)=> session.type===filterType);
  }

  const toggleSortUp = (e) => {
    const target = e.target.textContent.toLowerCase();    
    setSortUp(!sortUp);
    setSortTarget(target);
  };

  const correctSortTarget = sortTarget.slice(0, sortTarget.length - 3); // поправка из-за спецсимволов
  getSortedSessions(correctSortTarget, sortUp, filteredSessions);  
  
  return (
  
    <Wrapper>      
      <Title>BestRunner</Title>
      <Filter toggleSortUp={toggleSortUp} sessions = {sessions} filterType={filterType} setFilterType={setFilterType}/>
      <Sessions filteredSessions = {filteredSessions}/>
      <Chart filteredSessions={filteredSessions}/>      
      <Link to={Pages.NEW}>
        <Button>+</Button>
      </Link>
    </Wrapper>
  );
};

Main.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      distance: PropTypes.number,
      date: PropTypes.instanceOf(Date).isRequired,
      comment: PropTypes.string.isRequired,
    })
  ),
};

export default Main;
