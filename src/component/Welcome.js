/* eslint linebreak-style: ["error", "windows"] */
import React, { Component } from 'react';
import { jwtDecode } from 'jwt-decode';

class Welcome extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { username: undefined };
  // }

  componentDidMount() {
    const token = window.localStorage.getItem('jwt');
    const result = jwtDecode(token);
    return result;
  }

  render() {
    return (
      <h1>
        Welcome to the main Page
      </h1>
    );
  }
}

export default Welcome;
