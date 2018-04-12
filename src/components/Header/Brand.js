import React from 'react';
import classNames from 'classnames';
const Brand = props => {
  return (
    <h1
      className={classNames('tracked f1-ns f2 white bg-black ma0', props.className)}
      style={{ lineHeight: `64px` }}
    >
      {props.name}
    </h1>
  );
};

export default Brand;
