import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`  
  text-align: center;
  font-family: ${props=>props.theme.font};
  background-color: white;  
`;

const Nav = styled.nav`
  display: flex;  
  color: black; 
  cursor: pointer; 
  background-color: ${props=>props.theme.bgc};  
`;

const Logo = styled.div`
  width: 10%;
  padding: 10px;
  border: 1px solid white;  

  &:hover{
    color: ${props=>props.theme.primary};
  }

  &:active{
    color: ${props=>props.theme.secondary};
  }
  
  @media (max-width: ${props=>props.theme.mobile}) {
    display: none;    
`;

const Menu = styled.div`
  width: 90%;
  padding: 10px;
  border: 1px solid white;

  &:hover{
    color: ${props=>props.theme.primary};
  }

  &:active{
    color: ${props=>props.theme.secondary};
  }
    
  @media (max-width: ${props=>props.theme.mobile}){
    width: 100%;
    padding: 20px;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo>[Logo]</Logo>
        <Menu>[Menu]</Menu>
      </Nav>
    </Wrapper>
  );
}

export default Header;
