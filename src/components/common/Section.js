import React from 'react';
import classNames from 'classnames';

const Section = props => {
  return (
    <div className={classNames('flex justify-center flex-column pv6-l', props.className)}>
      {props.children}
    </div>
  );
};

export default Section;
