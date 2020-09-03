import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import styled from 'styled-components';
import {getDateFormat} from '../utils';

export default (props) => {
  const {
    buttonLabel,
    className,
    session
  } = props;

  const [modal, setModal] = useState(false);
  const [distance, setDistance] = useState(session.distance);
  const [comment, setComment] = useState(session.comment);
  const [date, setDate] = useState(session.date);
  const [isDeleting, setDeleting] = useState(false);

  const toggle = () => setModal(!modal);

  const onChangeDistance = (e) => {    
    setDistance(e.target.value);
  }

  const onChangeDate = (e) => {    
    setDate(new Date(e.target.value));
  }

  const onChangeComment = (e) => {    
    setComment(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(isDeleting){
      console.log(`deleting`);
      return;
    }
    console.log(`edit`)
  }

  const onDeleting = () => {
    setDeleting(true);
    toggle();
  }

  return (
    <div>
      <Button color="info" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Информация о тренировке: #{session.id} {session.type}</ModalHeader>
        <ModalBody>                 
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="date">Date: {getDateFormat(date)}</Label>
              <Input
                type="date"
                name="date"
                id="date"
                placeholder={date}
                defaultValue={date}
                onChange={onChangeDate}                            
              />
            </FormGroup>            
            <FormGroup>
              <Label for="distance">Distance:</Label>
              <Input type="number" name="distance" id="distance" placeholder="distance" 
              defaultValue={distance} onChange={onChangeDistance}
              />
            </FormGroup>
            <FormGroup>
              <Label for="comment">Comment:</Label>
              <Input type="textarea" name="comment" id="comment" 
              defaultValue={comment} onChange={onChangeComment}
              />
            </FormGroup>
            <Button style={{marginLeft: `10px`}} type="submit" color="success" onClick={toggle}>Изменить</Button>
            <Button style={{marginLeft: `10px`}} type="submit" color="danger" onClick={onDeleting}>Удалить</Button>
            <Button style={{marginLeft: `10px`}} color="secondary" onClick={toggle}>Cancel</Button>        
          </Form>
        </ModalBody>       
      </Modal>
    </div>
  );
};

