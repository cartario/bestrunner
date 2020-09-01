import React from 'react';
import styled from 'styled-components';
import Sessions from './sessions';

const Wrapper = styled.main`  
  text-align: center;
  font-family: ${props=>props.theme.font};
  background-color: white;  
`;

const Main = () => {
  return (
    <Wrapper>
      <h1>BestRunner</h1>
      <Sessions/>
    </Wrapper>
  );
};

export default Main;
