import React from 'react';

import {SmurfCard} from '../AppStyles.js';

const Smurf = props => {
  return (
    <SmurfCard>
      <h3>{props.name}</h3>
      <p>{props.height} tall</p>
      <p>{props.age} smurf years old</p>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

