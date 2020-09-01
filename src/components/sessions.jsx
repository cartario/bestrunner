import React from 'react';
import styled from 'styled-components';
import Session from './session';

const mocks = [
  {
    id: 1,
    type: `Велосипед`,
    date: new Date(),
    distance: 10,
  },
  {
    id: 2,
    type: `Бег`,
    date: new Date(),
    distance: 15,
  },
  {
    id: 3,
    type: `Лыжи`,
    date: new Date(),
    distance: 5,
  },
  {
    id: 4,
    type: `Плавание`,
    date: new Date(),
    distance: 7,
  },
  {
    id: 5,
    type: `Ходьба`,
    date: new Date(),
    distance: 11,
  }
];

const List = styled.ul`
  margin:0;
  padding:0;
  list-style: none;  
`;

const Sessions = () => {
  return (
    <List>
      {mocks.map((item)=><Session key={item.id} mock={item}/>)}
    </List>
  );
};

export default Sessions;
