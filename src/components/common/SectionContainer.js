import React from 'react';
import classNames from 'classnames';
const SectionContainer = props => {
  return (
    <div
      className={classNames(
        'w-100 center',
        props.className,
        { 'mr4-l ': props.left },
        { 'ml4-l ': props.right },
        'serviceContainer',
      )}
    >
      {props.children}
    </div>
  );
};

export default SectionContainer;
