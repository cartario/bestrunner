import React from 'react';
import { Spinner } from 'reactstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 45%;

`;

export default (props) => {
  return (
    <Wrapper>
      <Spinner type="grow" color="primary" />
      <p>Loading...</p>
    </Wrapper>
  );
};
