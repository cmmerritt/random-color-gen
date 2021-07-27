import { selectRandomElement } from './SelectRandomElement';

const colors = [
  'red',
  'yellow',
  'blue',
  'purple',
  'green',
  'orange'
];

export const TimerHandler = () => {
  setInterval(() => {
    const selectedColor = selectRandomElement(colors);
    this.setState({
      randomColor: selectedColor,
      url: this.state.url
    });
  }, 1000);
};
