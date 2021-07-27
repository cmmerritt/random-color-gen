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
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const selectedColor = selectRandomElement(colors);
      this.setState({
        randomColor: selectedColor
      });
    }, 1000);
  }
  //   const randomColor = (selectRandomElement('red', 'yellow', 'blue', 
  //     'purple', 'green', 'orange'));
  //   this.setState({ randomColor });
  //   setInterval(randomColor, 1000);
  // 

  render() {
    // const colors = [
    //   'red',
    //   'yellow',
    //   'blue',
    //   'purple',
    //   'green',
    //   'orange'
    // ];

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
