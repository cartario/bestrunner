import React from 'react';
import { Spinner } from 'reactstrap';

export default (props) => {
  return (
    <div>
      <Spinner type="grow" color="primary" />
      <p>Loading...</p>
    </div>
  );
};
