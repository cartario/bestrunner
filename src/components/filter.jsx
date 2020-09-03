import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;  
  width: 100%;
  margin: 0px;  
  padding: 10px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
  list-style: none;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); 
`;

const Item = styled.li`
  width: ${props=>props.width}%;  
  color: grey;
  cursor: pointer;
  text-align: left;  

  &:hover{
    color: ${props=>props.theme.primary};
  }

  &:active{
    color: ${props=>props.theme.secondary}
  }
`;

export default (props) => {
  return (
    <List>      
      <Item width={40}>Type</Item>
      <Item width={15}>Date</Item>
      <Item width={15}>Distance</Item>      
    </List>
  );
};
