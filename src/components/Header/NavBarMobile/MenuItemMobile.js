import React, { Component } from 'react';

class MenuItemMobile extends Component {
  constructor(props) {
    super(props);
    this.itemRef = React.createRef();
  }

  componentDidMount() {
    const rect = this.itemRef.current.getBoundingClientRect();
    this.props.itemRect(rect);
  }

  render() {
    return (
      <div className="ml4-ns ml3 f5-ns f6 " ref={this.itemRef}>
        {this.props.menu.map((item, i) => {
          return (
            <div key={item} className="pt2">
              {item}
            </div>
          );
        })}
      </div>
    );
  }
}

export default MenuItemMobile;
