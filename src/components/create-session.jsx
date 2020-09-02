import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {mocks} from './sessions';

export default class extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: 100,
      type: ``,
      distance: ``,
      comment: ``,
      date: new Date(),
    };

    this._changeHandler = this._changeHandler.bind(this);
    this._submitHandler = this._submitHandler.bind(this);    
  }

  _submitHandler(e){
    e.preventDefault();
    this.props.createSession({
      id: 102,
      type: this.state.type,
      distance: this.state.distance,
      comment: this.state.comment,
      date: new Date(),
    })    
  }

  _changeHandler(e){
    const name= e.target.name;    
    this.setState({
      [name]: e.target.value,
    })
  }

  render() {
    
    return (<>
      <Link to="/">go-back</Link>
      <form onSubmit={this._submitHandler} style={{display: `flex`, width: `50%` ,flexDirection: `column`}}>
        
        <h2>form</h2>
        
        <p>Type</p>
        <select  name="type" value={this.state.type} onChange={this._changeHandler}>
          <option>Тип</option>
          <option>Велосипед</option>
          <option>Бег</option>
          <option>Лыжи</option>
          <option>Плавание</option>
          <option>Ходьба</option>
        </select>
        <textarea required placeholder="distance" name="distance" value={this.state.distance} onChange={this._changeHandler}></textarea>
        <textarea required placeholder="comment" name="comment" value={this.state.comment} onChange={this._changeHandler}></textarea>
        <button>Send</button>
  
      </form>
      </>
    );
  }
};
