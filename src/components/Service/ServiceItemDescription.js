import React, { Component } from 'react';

class ServiceItemDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.element = React.createRef();
  }

  componentDidMount() {
    this.props.rect(this.element.current.getBoundingClientRect());
  }

  render() {
    return (
      <p className="f7 lh-copy fw9 silver tracked pl5-ns pl3 pv3 ma0" ref={this.element}>
        {this.props.description}
      </p>
    );
  }
}

export default ServiceItemDescription;
