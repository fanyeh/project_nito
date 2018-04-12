import React, { Component } from 'react';
import SliderButton from './SliderButton';
import SliderContent from './SliderContent';
import PropTypes from 'prop-types';

const setVisibleSlides = (visibleCount, totalCount) => {
  let visibleSlides = [totalCount - 1];
  for (let i = 0; i < visibleCount + 1; i++) {
    visibleSlides.push(i);
  }
  return visibleSlides;
};
const withSlider = images => Slide => {
  class Slider extends Component {
    constructor(props) {
      super(props);
      this.contentElement = React.createRef();
      this.transitionCount = 0;
      this.state = {
        slideIndex: 0,
        visibleSlides: setVisibleSlides(this.props.visibleCount, images.length),
      };
    }

    handleLeft = () => {
      this.startTransition(`translateX(-100%)`);
      this.transitionCallback = () => {
        this.updateVisibleSlides(slideIndex => {
          return slideIndex === images.length - 1 ? 0 : ++slideIndex;
        });
      };
    };

    handleRight = () => {
      this.startTransition(`translateX(100%)`);
      this.transitionCallback = () => {
        this.updateVisibleSlides(slideIndex => {
          return slideIndex === 0 ? images.length - 1 : --slideIndex;
        });
      };
    };

    updateVisibleSlides = cb => {
      const newVisibleSlides = this.state.visibleSlides.map(cb);
      this.setState({ visibleSlides: newVisibleSlides });
    };

    startTransition = transform => {
      this.contentElement.current.childNodes.forEach(node => {
        node.setAttribute('style', `transition:all 500ms; transform:${transform}`);
      });
    };

    transitionEndHandler = e => {
      if (e.target.classList.contains('slide') || e.target.dataset.type === 'slide') {
        this.transitionCount += 1;
        if (this.transitionCount === this.state.visibleSlides.length) {
          this.transitionCount = 0;
          this.endTransition();
          this.transitionCallback();
        }
      }
    };

    endTransition = () => {
      this.contentElement.current.childNodes.forEach(node => {
        node.setAttribute('style', `transition: ''; transform: translateX(0)`);
      });
    };

    render() {
      const { visibleSlides } = this.state;
      return (
        <div
          className="w-100 h-100 relative overflow-hidden"
          onTransitionEnd={this.transitionEndHandler}
        >
          <SliderButton onClick={this.handleLeft} icon="fa-arrow-left" />
          <SliderButton onClick={this.handleRight} icon="fa-arrow-right" right="right-0" />
          <SliderContent contentRef={this.contentElement}>{visibleSlides.map(Slide)}</SliderContent>
        </div>
      );
    }
  }
  Slider.defaultProps = {
    visibleCount: 1,
  };

  Slider.propTypes = {
    visibleCount: PropTypes.number,
  };
  return Slider;
};

export default withSlider;
