import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  margin-top: 15px;
  text-align: center;
  font-family: ${props=>props.theme.font};
  background-color: ${props=>props.theme.bgc};
  color: black;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;  
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width:${props=>props.theme.mobile}){
    flex-direction: column;
  }
`;

const Item = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover{
    color: ${props=>props.theme.primary};
  }

  &:active{
    color: ${props=>props.theme.secondary};
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <List>
        <Item>[Copyright]</Item>
        <Item>[Социальные сети]</Item>
        <Item>[Адрес]</Item>
      </List>
    </Wrapper>
  );
}

export default Footer;
