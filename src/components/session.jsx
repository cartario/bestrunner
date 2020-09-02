import React from 'react';
import styled from 'styled-components';

const Session = styled.li`
  display: flex;
  justify-content: space-between;  
  max-height: 50px;
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
  height: 30px;
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

export default ({mock}) => {
  return (
    <Session>      
      <Type>{mock.type}</Type>
      <Date>{mock.date.getFullYear()}</Date>
      <Distance>{mock.distance}km</Distance>
      <Info onClick={()=>console.log(`info${mock.id}`)}>
        <img width="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Info_Simple_bw.svg/768px-Info_Simple_bw.svg.png"/>
      </Info>
    </Session>
  );
};
