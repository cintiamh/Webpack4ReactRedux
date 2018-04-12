import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class MyComponent extends Component {
  constructor() {
    super();

    this.state = {
      title: 'My app',
    };
  }

  render() {
    return (
      <div>
        Hello!!!!!!! {this.state.title}
      </div>
    );
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root'),
);
