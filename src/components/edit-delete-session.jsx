import React, {useState} from 'react';
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {getDateFormat} from '../utils';
import {TypeNames} from '../const';
import { connect } from 'react-redux';
import {ActionCreator} from '../reducer';

const EditSession = (props) => {
  const {
    buttonLabel,
    session,
    editSession,
    deleteSession,    
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
      comment, date, distance: Number(distance), type
    });
  }

  const onDeleting = () => {
    setDeleting(true);
    toggle();
  }

  return (
    <div>
      <Button color="info" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Информация о тренировке: #{session.id} {session.type}</ModalHeader>
        <ModalBody>                 
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="type">Тип тренировки</Label>
              <Input 
                type="select" 
                name="type" 
                id="type" 
                defaultValue={type}
                onChange={onChangeType}>
                {TypeNames.map((type)=>
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

EditSession.propTypes = {
  editSession: PropTypes.func.isRequired,
  deleteSession: PropTypes.func.isRequired,
  session: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    distance: PropTypes.number,
    date: PropTypes.instanceOf(Date).isRequired,
    comment: PropTypes.string.isRequired,
  }),  
  buttonLabel: PropTypes.string.isRequired,
};

export {EditSession};
export default connect(mapStateToProps, mapDispatchToProps)(EditSession);
