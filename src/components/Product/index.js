import React, { Component } from 'react';
import ProductSlide from './ProductSlide';
import withSlider from '@common/withSlider';

const images = [
  { source: 'https://cdn.stocksnap.io/img-thumbs/960w/IL67WOVPJR.jpg', id: 0 },
  { source: 'https://cdn.stocksnap.io/img-thumbs/960w/Y4KNRLFKBK.jpg', id: 1 },
  { source: 'https://cdn.stocksnap.io/img-thumbs/960w/Y4KNRLFKBK.jpg', id: 2 },
  { source: 'https://cdn.stocksnap.io/img-thumbs/960w/Y4KNRLFKBK.jpg', id: 3 },
  { source: 'https://cdn.stocksnap.io/img-thumbs/960w/IL67WOVPJR.jpg', id: 4 },
  { source: 'https://cdn.stocksnap.io/img-thumbs/960w/Y4KNRLFKBK.jpg', id: 5 },
  { source: 'https://cdn.stocksnap.io/img-thumbs/960w/Y4KNRLFKBK.jpg', id: 6 },
  { source: 'https://cdn.stocksnap.io/img-thumbs/960w/Y4KNRLFKBK.jpg', id: 7 },
];

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { visibleCount: 4, slideWidth: 'w-25' };
  }

  componentWillMount() {
    this.updateVisibleSlides();
  }

  updateVisibleSlides = () => {
    let count = this.state.visibleCount;
    let width = this.state.slideWidth;
    const screenWidth = window.screen.availWidth;
    if (screenWidth < 480) {
      count = 1;
      width = 'w-100';
    } else if (screenWidth < 1280) {
      count = 2;
      width = 'w-50';
    }
    this.setState({
      visibleCount: count,
      slideWidth: width,
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateVisibleSlides);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateVisibleSlides);
  }

  render() {
    const { visibleCount, slideWidth } = this.state;
    const Slide = slideIndex => {
      return (
        <ProductSlide
          source={images[slideIndex].source}
          key={images[slideIndex].id}
          width={slideWidth}
        />
      );
    };
    const ProductSlider = withSlider(images)(Slide);
    return (
      <div className="vh-50 w-100 mv3">
        <ProductSlider visibleCount={visibleCount} />
      </div>
    );
  }
}

export default Product;
