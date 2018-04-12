import React from 'react';
import classNames from 'classnames';

const SliderButton = props => {
  const offset = props.right ? 'right-2-ns' : 'left-2-ns';
  return (
    <div className={classNames('absolute flex items-center h-100 top-0 ', props.right, offset)}>
      <i
        className={classNames('fas fa-2x white pa2 z-1 sliderButton cp bg-black o-30', props.icon)}
        onClick={props.onClick}
      />
    </div>
  );
};

export default SliderButton;
