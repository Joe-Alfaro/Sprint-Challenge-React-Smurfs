import React, { Component } from 'react';

import {StyledSmurfForm, StyledButton} from '../AppStyles.js';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.addSmurf(this.state)
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <StyledSmurfForm onSubmit={this.submitHandler}>
        <div>
          <p>Name:</p><br/>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.name}
            name="name"
          /><br/>
        </div>
        <div>
          <p>Age:</p><br/>
          <input
            type="number"
            onChange={this.handleInputChange}
            value={this.state.age}
            name="age"
          /><br/>
        </div>
        <div>
          <p>Height:</p><br/>
          <input
            type="number"
            onChange={this.handleInputChange}
            value={this.state.height}
            name="height"
          /><br/>
        </div>
        <StyledButton type="submit">Add to the village</StyledButton>
      </StyledSmurfForm>
    );
   }
}

export default SmurfForm;
