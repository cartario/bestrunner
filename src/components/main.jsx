import React, {useState} from 'react';
import styled from 'styled-components';
import Sessions from './sessions';
import Filter from './filter';
import Chart from './chart';
import {Link} from 'react-router-dom';
import {sort, SortType} from '../utils';


const Wrapper = styled.main`
  text-align: center;
  font-family: ${props=>props.theme.font}; 
  background-color: white; 
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
 
  const [sortTarget, setSortTarget] = useState(`date`);

  const [filterType, setFilterType] = useState(`Все`);

  let filteredSessions;

  if(filterType === `Все`){
    
    filteredSessions = sessions;
  } else {
    filteredSessions = sessions.filter((session)=> session.type===filterType);
  }

  const toggleSortUp = (e) => {
    const target = e.target.textContent.toLowerCase();    
    setSortUp(!sortUp);
    setSortTarget(target);
  };

  const getSortedSessions = (sortTarget, sortUp) => {
    if(sortTarget === "date" || sortTarget === "type"){
      return  sortUp ? sort(SortType.DATE_UP, sessions) : sort(SortType.DATE_DOWN, sessions);
    }
    return  sortUp ? sort(SortType.DISTANCE_UP, sessions) : sort(SortType.DISTANCE_DOWN, sessions);
  };

  getSortedSessions(sortTarget, sortUp);  
  
  return (
    <Wrapper>
      <h1 style={{display: `none`}}>BestRunner</h1>
      <Filter toggleSortUp={toggleSortUp} sessions = {sessions} filterType={filterType} setFilterType={setFilterType}/>
      <Sessions sessions = {filteredSessions}/>
      <Chart/>      
      <Link to="/new">
        <Button>+</Button>
      </Link>
    </Wrapper>
  );
};

export default Main;
