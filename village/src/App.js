import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  
  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
      .then(response => (
        this.setState({
          smurfs: response.data,
        }) 
      ))
      .catch(error => console.log(error))
  }
  
  addSmurf = smurf => {
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        this.setState({
          smurfs: response.data
        })

        this.props.history.push('/')
      })
      .catch(error=> console.log(error))
  }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path='/'
          render={() => (
            <Smurfs
              smurfs={this.state.smurfs}
            />)
          }
        />
        <Route
          path='/add-smurf'
          render={() => (
            <SmurfForm 
              addSmurf={this.addSmurf} 
            />)
          }
        />
      </div>
    );
  }
}

export default App;
