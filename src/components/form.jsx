import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`;

const Inner = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
`;

class Form extends React.Component { 
  constructor(props){
    super(props);

    this.state={
      isDeleting: false,
      isShowing: false,
    };
  }

  _toggleEditDeleting(){
    this.setState({
      isDeleting: !this.state.isDeleting,
    })
  }
  
  render (){
    const {sessions, currentId, togglePopupHandler} = this.props;
    const currentSession = sessions.find((session)=>session.id===currentId);  
  
    return (      
      <Wrapper>
        <Inner>
          <form onSubmit={togglePopupHandler}>
            <h1>{currentSession.type}</h1>
            <a href="#" onClick={togglePopupHandler}>Go-back</a>
            <p>{currentSession.date.getFullYear()}</p>
            <p>{currentSession.distance}</p>
            <textarea placeholder="comment"></textarea>              

            {!this.state.isShowing &&
            <button onClick={()=>{return this.setState({isShowing: true, isDeleting:true})}}>delete</button>
            }

            {!this.state.isShowing &&
            <button onClick={()=>{return this.setState({isShowing: true, isDeleting:false})}}>Edit</button>
            }

            {this.state.isShowing &&
            <button onClick={()=>{return this.setState({isShowing: false, isDeleting:false})}}>Вернуться</button>
            }            

            {this.state.isShowing&&<button type="submit">{this.state.isDeleting ? `Правда удалить?`:`Внести изменения`}</button>}
                  
          </form>
        </Inner>
      </Wrapper>
    );
  }
};

export default Form;
