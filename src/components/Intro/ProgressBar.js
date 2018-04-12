import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ProgressBar extends Component {
  render() {
    const setting = {
      '--barWidth': this.props.width,
      '--percentage': this.props.percentage,
    };
    return (
      <div>
        <div className="relative">
          {this.props.name}{' '}
          <span
            className="absolute"
            style={{
              right: `${(1 - this.props.percentage - 0.04) * 100}%`,
            }}
          >
            {this.props.percentage * 100}%
          </span>
        </div>
        <div className="progressBar relative bg-light-gray mb4 mt3" style={setting} />
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  width: '100%',
  percentage: 0.5,
};

ProgressBar.propTypes = {
  width: PropTypes.string,
  percentage: PropTypes.number,
};

export default ProgressBar;
