import React, { Component } from 'react';
class SectionHeader extends Component {
  render() {
    return (
      <div className="sectionHeader">
        <h1 className="dib tracked-mega fw4 f5 mt0 mb4 ttu">{this.props.header}</h1>
      </div>
    );
  }
}
export default SectionHeader;
