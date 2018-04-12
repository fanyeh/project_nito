import React, { Component } from 'react';
import MenuItemMobile from './MenuItemMobile';
import FlipMove from 'react-flip-move';

class MenuMobile extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenuID: -1, newHeight: '55px' };
    this.menuMobileElement = React.createRef();
  }

  openMenu = menuID => {
    menuID === this.state.showMenuID
      ? this.setState({ showMenuID: -1 })
      : this.setState({ showMenuID: menuID });
  };

  getItemRect = rect => {
    this.setState({ newHeight: this.itemHeight + rect.height });
  };

  componentDidMount() {
    const menuElement = this.menuMobileElement.current.childNodes[0];
    this.itemHeight = menuElement.getBoundingClientRect().height;
  }

  render() {
    const items = this.props.items;
    const names = Object.keys(items);
    const { showMenuID } = this.state;
    return (
      <div
        className="w-100 absolute bg-white ba b--light-gray pv3 ph5-ns ph3 z-1"
        style={this.props.style}
        ref={this.menuMobileElement}
      >
        {names.map((name, i) => {
          return (
            <div
              key={name}
              className="ttu pv2 f4-ns f5"
              style={{
                transition: `height 500ms`,
                height: showMenuID === i ? `${this.state.newHeight}px` : `${this.itemHeight}px`,
              }}
            >
              {name}
              <div className="dib fr" onClick={() => this.openMenu(i)}>
                <i className="fas fa-chevron-circle-down " />
              </div>
              <FlipMove enterAnimation="accordionVertical" leaveAnimation="accordionVertical">
                {showMenuID === i && (
                  <MenuItemMobile menu={items[name]} itemRect={this.getItemRect} />
                )}
              </FlipMove>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MenuMobile;
