import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {getRandomInt} from '../utils';
import {TypeNames} from '../const';
 
const Wrapper = styled.div`
  width: 80%;
  margin: 10px auto;
`;

const ErrorField = styled.div`
  font-size: 14px;
  color: red;

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
  
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translateX(-5px);
    }
  
    20%,
    40%,
    60%,
    80% {
      transform: translateX(5px);
    }
  }

  animation: shake 0.6s;  
`;

const initialValues = {
  distance: ``,
  type: ``,
  date: ``,
  comment: ``,
};

const validationSchema = yup.object({
  comment: yup
    .string()
    .required(`Это поле обязательное`)
    .min(5, `Минимум 5 символов`)
    .max(255, `Достаточно)`),
  type: yup.string().required(`Это поле обязательное`),
  date: yup.date().required(`Это поле обязательное`),
  distance: yup 
    .number().required(`Это поле обязательное`).min(0, `Должно быть больше нуля`).max(100, `Это уже перебор`)
});

export default ({createSession}) => {
  return (
    <Wrapper>
        <Link to="/">Вернуться назад</Link>
        <h2>Новая тренировка</h2>
        <Formik 
          initialValues={initialValues}
          validationSchema = {validationSchema}
          onSubmit={(data, {setSubmitting, resetForm})=>{
            setSubmitting(true);

            createSession({
              id: getRandomInt(1,100),
              type: data.type,
              distance: data.distance,
              comment: data.comment,
              date: new Date (data.date),
            });

            setSubmitting(false);
            resetForm();
        }}>
          {({values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit})=>(
            <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="type">Type</Label>
              <Input type="select" name="type" id="type" value={values.type} onChange={handleChange} onBlur={handleBlur}
              valid={!errors.type && touched.type}
              > 
                <option></option>
                {TypeNames.map((type)=><option key={type}>{type}</option>)}
              </Input>          
              {touched.type && errors.type && <ErrorField>{errors.type}</ErrorField>}
            </FormGroup>          
            <FormGroup>
              <Label for="distance">Distance, km</Label>
              <Input type="number" name="distance" id="distance" placeholder="distance"
              value={values.distance} onChange={handleChange} onBlur={handleBlur} valid={!errors.distance && touched.distance}/>
              {touched.distance && errors.distance && <ErrorField>{errors.distance}</ErrorField>}
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate">Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
                value={values.date} onChange={handleChange} onBlur={handleBlur}
                valid={!errors.date && touched.date}
              />
              {touched.date && errors.date && <ErrorField>{errors.date}</ErrorField>}
            </FormGroup>
            <FormGroup>
              <Label for="comment">Comment</Label>
              <Input type="textarea" name="comment" id="comment" 
              value={values.comment} errors={errors.comment} onChange={handleChange} onBlur={handleBlur}
              valid={!errors.comment && touched.comment}
              />
              {touched.comment && errors.comment && <ErrorField>{errors.comment}</ErrorField>}
            </FormGroup>
            <Button color="success" disabled={isSubmitting}>Добавить тренировку</Button>
          </Form>
          )}
        </Formik>
      </Wrapper>
  );
};
