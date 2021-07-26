import React, { Component } from 'react';

export default class ColorRandomizer extends Component {
  state = {
    randomColor: 'red',
  }
  render() {
    const colors = [
      'red',
      'yellow',
      'blue',
      'purple',
      'green',
      'orange'
    ];
    return (
      <>
        <div
          style = {{ 
            backgroundColor: this.state.randomColor,
            width: '200px',
            height: '200px'
          }}
        ></div>
      </>
    );
  }
}
