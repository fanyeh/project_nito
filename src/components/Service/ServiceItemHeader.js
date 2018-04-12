import React, { Component } from 'react';
import classNames from 'classnames';
class ServiceItemHeader extends Component {
  render() {
    return (
      <h1
        className={classNames(
          'serviceItemHeader f5-ns f6 cp bg-light-gray tracked fw4 dark-gray mt4 mb0',
          {
            serviceItemHeaderTransition: this.props.expand,
          },
        )}
        onClick={this.props.onClick}
      >
        {this.props.name}
      </h1>
    );
  }
}

export default ServiceItemHeader;
