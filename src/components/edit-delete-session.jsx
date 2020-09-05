import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import styled from 'styled-components';
import {getDateFormat, getUniq} from '../utils';
import { connect } from 'react-redux';
import {ActionCreator} from '../reducer';

const EditSession = (props) => {
  const {
    buttonLabel,
    className,
    session,
    editSession,
    deleteSession,
    sessions
  } = props;

  const [modal, setModal] = useState(false);
  const [distance, setDistance] = useState(session.distance);
  const [comment, setComment] = useState(session.comment);
  const [date, setDate] = useState(session.date);
  const [type, setType] = useState(session.type);
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

  const onChangeType = (e) => {    
    setType(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(isDeleting){      
      deleteSession(session.id);
      return;
    }

    editSession({
      id: session.id,      
      comment, date, distance, type
    });
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
              <Label for="exampleSelect">Тип тренировки</Label>
              <Input 
                type="select" 
                name="type" 
                id="type" 
                defaultValue={type}
                onChange={onChangeType}>
                {getUniq(sessions).filter((type)=>type !== `servCheck`).map((type)=>
                <option key={type}>{type}</option>)}
              </Input>
            </FormGroup>
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

const mapStateToProps = (state) => ({
  sessions: state.SESSIONS.sessions,
});

const mapDispatchToProps = (dispatch) => ({
  editSession(session) {
    dispatch(ActionCreator.editSession(session));
  },
  deleteSession(id) {
    dispatch(ActionCreator.deleteSession(id));
  },
});

export {EditSession};
export default connect(mapStateToProps, mapDispatchToProps)(EditSession);

