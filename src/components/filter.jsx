import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  
  width: 100%;
  margin: 0px;
  
  padding: 2px 10px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
  list-style: none;
  border-bottom: 1px solid white;
`;

const Item = styled.li`
  width: ${props=>props.width}%;
  
  color: grey;
  cursor: pointer;
  text-align: left;  

  &:hover{
    transform: scale(1.1);
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
