import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Header from '../components/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Hello!',
    };
  }
  render() {
    return (
      <div className="container-fluid text-center">
        Testing
        {this.state.text}
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
