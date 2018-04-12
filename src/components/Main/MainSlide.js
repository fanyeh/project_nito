import React from 'react';
import Slide from '@common/Slide';
const SlideImage = props => {
  return (
    <Slide className="w-100 overflow-hidden">
      <img src={props.source} alt="" className="slideImage" style={{ maxWidth: 'none' }} />
    </Slide>
  );
};

export default SlideImage;
