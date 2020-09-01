import React from 'react';
import styled from 'styled-components';

const Session = styled.li`
text-align: center;
  color: ${props=>props.theme.secondary};
`;

export default ({id}) => {
  return (
    <Session>
      Session-{id}
    </Session>
  );
};
