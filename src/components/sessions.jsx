import React, {useState} from 'react';
import styled from 'styled-components';
import Session from './session';

const List = styled.ul`
  margin:0;
  padding:0;
  list-style: none;
`;

const Sessions = (props) => {
  const {sessions} = props;
  const [showPopup, setShowPopup] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  
  const togglePopup = (id) => {
    setShowPopup(!showPopup);
    setCurrentId(id);
  };

  return (
    <List>
    {sessions.map((session)=><Session 
      key={session.id}
      session={session}
      togglePopupHandler = {togglePopup}
      />)}       
  </List>
  );
};

export default Sessions;

// {showPopup && <Form currentId={currentId} sessions={sessions} togglePopupHandler = {()=>togglePopup(currentId)}/>}
