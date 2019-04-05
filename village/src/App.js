import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import axios from 'axios';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import {NavBar} from './AppStyles.js';

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
      <div>
        <NavBar>
          <h1>Smurfs</h1>
          <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/add-smurf'>Add Smurf</NavLink>
         </nav>
        </NavBar>
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
