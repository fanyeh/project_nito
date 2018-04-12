import React, { Component } from 'react';
import classNames from 'classnames';

class NavList extends Component {
  render() {
    const { className, children } = this.props;
    return (
      <ul ref={this.props.navListRef} className={classNames('flex pa0 ma0', className)}>
        {children}
      </ul>
    );
  }
}

export default NavList;
