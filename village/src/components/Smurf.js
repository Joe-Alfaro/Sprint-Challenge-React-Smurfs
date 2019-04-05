import React from 'react';
import axios from 'axios';

import {SmurfCard} from '../AppStyles.js';

const Smurf = props => {
  const updateHandler = () => {
  
  }
  const deleteHandler = () => {
    props.deleteSmurf(props.id);
  }
  return (
    <SmurfCard>
      <h3>{props.name}</h3>
      <p>{props.height} tall</p>
      <p>{props.age} smurf years old</p>
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={updateHandler}>Edit</button>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

