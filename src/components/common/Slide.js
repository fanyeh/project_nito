import React from 'react';
import classNames from 'classnames';
const Slide = props => {
  return (
    <div className={classNames('flex-shrink-0 h-100', props.className)} data-type="slide">
      {props.children}
    </div>
  );
};

export default Slide;
