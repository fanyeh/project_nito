import React from 'react';
import classNames from 'classnames';

const SectionCaption = props => {
  return (
    <div
      className={classNames(
        'sectionCaption garamond tracked-tight mb2 f1-ns f2 lh-solid mt2',
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};

export default SectionCaption;
