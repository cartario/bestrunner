import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {getRandomInt} from '../utils';
 
const Wrapper = styled.div`
  width: 80%;
  margin: 10px auto;
`;

export default class extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: 100,
      type: `Велосипед`,
      distance: ``,
      comment: ``,
      date: ``,
    };
    this._changeHandler = this._changeHandler.bind(this);
    this._submitHandler = this._submitHandler.bind(this);    
  }

  _submitHandler(e){
    e.preventDefault();
    this.props.createSession({
      id: getRandomInt(1,100),
      type: this.state.type,
      distance: this.state.distance,
      comment: this.state.comment,
      date: new Date (this.state.date),
    })    
  }

  _changeHandler(e){
    const name= e.target.name;    
    this.setState({
      [name]: e.target.value,
    })    
  }

  render() {    
    return (
      <Wrapper>
        <Link to="/">Вернуться назад</Link>
        <h2>Новая тренировка</h2>
        <Form onSubmit={this._submitHandler}>
          <FormGroup>
            <Label for="type">Type</Label>
            <Input type="select" name="type" id="type" defaultValue={this.state.type} onChange={this._changeHandler}>
              <option>Велосипед</option>
              <option>Бег</option>
              <option>Лыжи</option>
              <option>Плавание</option>
              <option>Ходьба</option>
            </Input>
          </FormGroup>          
          <FormGroup>
            <Label for="distance">Distance, km</Label>
            <Input type="number" min="0" name="distance" id="distance" placeholder="distance" required
            value={this.state.distance} onChange={this._changeHandler}/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
              value={this.state.date}
              onChange={this._changeHandler}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="comment">Comment</Label>
            <Input type="textarea" name="comment" id="comment" 
            value={this.state.comment} onChange={this._changeHandler}
            />
          </FormGroup>
          <Button color="success">Добавить тренировку</Button>
        </Form>
      </Wrapper>
    );
  }
};
