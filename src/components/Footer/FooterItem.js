import React, { Component } from 'react';
class FooterItem extends Component {
  render() {
    return (
      <div className="w-20-l w-80 mh4-l center">
        {this.props.name && <h1 className="f5 tracked-mega ttu mb4">{this.props.name}</h1>}
        {this.props.children}
      </div>
    );
  }
}

export default FooterItem;
