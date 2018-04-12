import React from 'react';
import classNames from 'classnames';

const NavItem = props => {
  return (
    <div
      className={classNames('tc h-100  navItem relative', props.className)}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      style={props.mobile ? { width: 'auto' } : { width: '100%' }}
    >
      {props.children}
    </div>
  );
};

export default NavItem;
