/* eslint-disable max-len */
import React, { Component } from 'react';
import { selectRandomElement } from '../components/app/SelectRandomElement';

const colors = [
  'red',
  'yellow',
  'blue',
  'purple',
  'green',
  'orange'
];

export default class ColorRandomizer extends Component {
  state = {
    randomColor: 'red',
    url: ''
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const selectedColor = selectRandomElement(colors);
      this.setState({
        randomColor: selectedColor,
        url: this.state.url
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.randomColor === prevState.randomColor) {
      this.interval = setInterval(() => {this.setState({
      // eslint-disable-next-line max-len
        randomColor: this.state.randomColor,
        url: 'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg' 
      });
        
      }, 1000);
    }
  }

  render() {
    return (
      <>
        <div
          style = {{ 
            backgroundColor: this.state.randomColor,
            width: '200px',
            height: '200px',
          }}
        >
          <img src = {this.state.url} />
        </div>
      </>
    );
  }
}
