import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 85%;
  margin: 0px;
  margin-left:10px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: bold;
  list-style: none;
  border-bottom: 1px solid white;
`;

const Item = styled.li`
  width: 20%;  
  color: grey;
  cursor: pointer;
  text-align: right;  
`;

export default (props) => {
  return (
    <List>
      <Item>Type</Item>
      <Item>Date</Item>
      <Item>Distance</Item>
    </List>
  );
};
