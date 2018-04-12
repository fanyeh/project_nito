import React, { Component } from 'react';

class SliderContent extends Component {
  render() {
    return (
      <div className="flex  h-inherit items-center justify-center" ref={this.props.contentRef}>
        {this.props.children}
      </div>
    );
  }
}

export default SliderContent;
