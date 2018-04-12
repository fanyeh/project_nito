import React, { Component } from 'react';
import Slide from '@common/Slide';
import ProductSlideInfo from './ProductSlideInfo';
import FlipMove from 'react-flip-move';
import classNames from 'classnames';

const enterTransition = {
  from: {
    transform: 'translateX(-100%)',
  },
  to: {
    transform: '',
  },
};

const leaveTransition = {
  from: {
    transform: '',
  },
  to: {
    transform: 'translateX(-100%)',
  },
};

class ProductSlide extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  hover = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { source, width } = this.props;
    return (
      <Slide className={classNames('ph3', width)}>
        <div
          className="h-inherit overflow-hidden relative"
          onMouseEnter={this.hover}
          onMouseLeave={this.hover}
        >
          <img src={source} alt="" className="h-100 abs-center" style={{ maxWidth: 'none' }} />
          <FlipMove
            enterAnimation={enterTransition}
            leaveAnimation={leaveTransition}
            className="w-100 h-100 "
          >
            {this.state.show && <ProductSlideInfo />}
          </FlipMove>
        </div>
      </Slide>
    );
  }
}

export default ProductSlide;
