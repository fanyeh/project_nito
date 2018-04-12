import React, { Component } from 'react';
import MainContent from './MainContent';
import withSlider from '@common/withSlider';
import MainSlide from './MainSlide';

const images = [
  {
    source:
      'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1053a3cdbabdd85102b762b3a05966ae&auto=format&fit=crop&w=1502&q=80',
    id: 0,
  },
  {
    source:
      'https://images.unsplash.com/photo-1502366542954-bb538f5ff0e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cfc27b0d9b2ca2534ea759b450d942af&auto=format&fit=crop&w=1668&q=80',
    id: 1,
  },
  {
    source:
      'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ef79a01f0a12450049b7d20cd10f93c&auto=format&fit=crop&w=1267&q=80',
    id: 2,
  },
];

const Slide = slideIndex => {
  return <MainSlide source={images[slideIndex].source} key={images[slideIndex].id} />;
};
const MainSlider = withSlider(images)(Slide);

class Main extends Component {
  render() {
    return (
      <div className="w-100 vh-100 relative">
        <MainSlider />
        <MainContent />
      </div>
    );
  }
}

export default Main;
