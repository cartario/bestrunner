import React from 'react';
import styled from 'styled-components';
import Sessions from './sessions';
import Filter from './filter';
import Chart from './chart';
import CreateSession from './create-session';

const Wrapper = styled.main`  

  text-align: center;
  font-family: ${props=>props.theme.font}; 
  background-color: lightgrey; 
`;

const Main = () => {
  return (
    <Wrapper>
      <h1 style={{margin:0, padding: `20px`}}>BestRunner</h1>
      <Filter/>
      <Sessions/>
      <Chart/>
      <CreateSession/>
    </Wrapper>
  );
};

export default Main;
