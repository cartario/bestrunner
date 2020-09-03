import React from 'react';
import styled from 'styled-components';
import EditSession from './edit-delete-session';
import {getDateFormat} from '../utils';

const Session = styled.li`
  display: flex;
  justify-content: space-between;  
  min-height: 50px;
  margin: 5px 0; 
  padding: 10px;
  text-align: left;  
  
  color: ${props=>props.theme.secondary};
  background-color: white;
  
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); 

  &:hover{
    background-color: lightgrey;    
  }
`;

const Date = styled.span`
  display:block;  
  width: 15%;
  height: 17px;
  
  border-radius: 5px; 
  color: black;   
`;

const Type = styled.p`
  width: 40%;
  
  display: inline-block;  
  margin: 0;  
  
  border-radius: 5px;
  color: black;  
`;

const Distance = styled(Type)`
  width: 30%;
`;

const Info = styled.div` 
  width: 15%;
`;

export default ({session, togglePopupHandler}) => {
  return (
    <Session>      
      <Type>{session.type}</Type>
      <Date>{getDateFormat(session.date)}</Date>
      <Distance>{session.distance}km</Distance>
      <Info onClick={()=>togglePopupHandler(session.id)}>        
        <EditSession session={session} buttonLabel={`Подробнее`}/>
      </Info>
    </Session>
  );
};
