import React, { Component } from 'react';

import './Form.css'

class Form extends Component {
  state = {
    FirstName: "",
    Email: ""
  }

  handleChange = (event) => {
    console.log(event.target.name)
    //Pouvoir changer 2 trucs en une seule fonction
    this.setState({[event.target.name]: event.target.value})
  }
  render() {
    return (
      <div>
        <p>First name: {this.state.FirstName}</p>
        <p>Email: {this.state.Email}</p>
        <input name="FirstName" type="text" onChange={this.handleChange} />
        <input name="Email" type="email" onChange={this.handleChange} />
        <input type="button" value="Submit"/>
      </div>
    );
  }
}

export default Form;