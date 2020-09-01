import React from 'react';
import styled from 'styled-components';

const Session = styled.li`
  display: flex;
  justify-content: space-between;  
  margin: 20px;
  padding: 10px;
  text-align: center;  
  color: ${props=>props.theme.secondary};
  background-color: white;
  border-radius: 5px; 
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); 

  &:hover{
    background-color: grey;    
  }
`;

const Date = styled.span`
  display:block;  
  width: 15%;
  height: 17px;
  border: 1px dashed ${props=>props.theme.secondary};
  border-radius: 5px; 
  color: black;   
`;

const Type = styled.p`
  width: 40%;
  display: inline-block;  
  margin: 0;
  font-size: 1.5rem;
  border: 1px dashed black;
  border-radius: 5px;
  color: black;  
`;

const Distance = styled(Type)`
  width: 30%;
`;

const Info = styled.div` 
  width: 15%;
`;

export default ({mock}) => {
  return (
    <Session>      
      <Type>{mock.type}</Type>
      <Date>{mock.date.getFullYear()}</Date>
      <Distance>Session-{mock.id} - {mock.distance}km</Distance>
      <Info onClick={()=>console.log(`info${mock.id}`)}>
        <img width="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Info_Simple_bw.svg/768px-Info_Simple_bw.svg.png"/>
      </Info>
    </Session>
  );
};
