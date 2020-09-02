import React, {useState} from 'react';
import styled from 'styled-components';
import Session from './session';
import Form from './form';

export const mocks = [
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

const sessions = mocks;

const List = styled.ul`
  margin:0;
  padding:0;
  list-style: none;
`;

const Sessions = (props) => {
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
      mock={session}
      togglePopupHandler = {togglePopup}
      />)}

      {showPopup && <Form currentId={currentId} sessions={sessions} togglePopupHandler = {()=>togglePopup(currentId)}/>}
  </List>
  );
};

// class Sessions extends React.Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       showPopup: false,
//       currentId: 0,
//     };

//     this._togglePopup = this._togglePopup.bind(this);
//   }

//   _togglePopup(id){
//     this.setState({
//       showPopup: !this.state.showPopup,
//       currentId: id,
//     })
//   }

//   render(){
//     return (
//       <List>
//       {sessions.map((session)=><Session 
//         key={session.id}
//         mock={session}
//         togglePopupHandler = {this._togglePopup}
//         />)}

//         {this.state.showPopup && <Form currentId={this.state.currentId} sessions={sessions} togglePopupHandler = {this._togglePopup}/>}
//     </List>
//     );
//   }
// };

export default Sessions;
