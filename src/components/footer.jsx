import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer` 
  text-align: center;
  font-family: ${props=>props.theme.font};
  background-color: ${props=>props.theme.primary};
  color: white;
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
`;

const LinkItem = styled.a`
  color: white;

  &:hover{
    color: ${props=>props.theme.secondary};
  }

  &:active{
    color: white;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <List>
        <Item>
          <LinkItem href="#">[Copyright]</LinkItem>
        </Item>
        <Item>
          <LinkItem href="#">[Контакты]</LinkItem>
        </Item>
        <Item>
          <LinkItem href="https://wa.me/+79264915349">[Обратная связь]</LinkItem>
        </Item>
      </List>
    </Wrapper>
  );
}

export default Footer;
