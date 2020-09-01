import React from 'react';
import styled from 'styled-components';
import Session from './session';

const List = styled.ul`
  list-style: none;
`;

const Sessions = () => {
  return (
    <List>
      {[1,2,3,4,5].map((item)=><Session key={item} id={item}/>)}
    </List>
  );
};

export default Sessions;
