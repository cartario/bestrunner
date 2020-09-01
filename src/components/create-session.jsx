import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  position: fixed;  
  z-index: 1;
  bottom: 20px;
  right: 30px;
  display: block;
  width: 100px;
  height: 100px;
  font-size: 50px;
  background-color: ${props=>props.theme.primary};
  outline: none;
  border: none;
  color: white;
  border-radius: 50%;  
  transition: 0.5s transform ease;

  &:hover{
    transform: scale(1.5);
  }

  &:active{
    background-color: ${props=>props.theme.pink};
  }
`;

export default (props)=>{
  return (
    <Wrapper onClick={()=>console.log(`plus`)}>
      +
    </Wrapper>
  );
};