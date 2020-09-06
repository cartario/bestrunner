import React from 'react';
import styled from 'styled-components';
import Session from './session';

const List = styled.ul`
  margin:0;
  padding:0;
  list-style: none;
`;

const Info = styled.div`
  padding: 50px;
  font-size: 30px;
  background-color: ${props=> props.theme.pink};
  color: white;
`;

const Sessions = (props) => {
  const {filteredSessions: sessions} = props;

  return (
    <List>
    {sessions.length ? sessions.map((session)=><Session 
      key={session.id}
      session={session}      
      />) : <Info>Самое время добавить свою первую тренировку</Info>}       
    </List>
  );
};

export default Sessions;
