import React, { Component } from 'react';
import NavList from './../NavList';
import NavItem from './../NavItem';
import Menu from './Menu';
import MenuTitle from './MenuTitle';
import Brand from './../Brand';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenuID: -1 };
  }

  openMenu = menuID => {
    this.setState({ showMenuID: menuID });
  };

  closeMenu = () => {
    this.setState({ showMenuID: -1 });
  };

  render() {
    const { menuItems } = this.props;
    const { showMenuID } = this.state;
    const navItems = Object.keys(menuItems);
    return (
      <nav ref="navBar">
        <NavList className="items-center h3">
          <NavItem>
            <Brand name="nito." />
          </NavItem>
          {navItems.map((title, i) => {
            return (
              <NavItem
                key={i}
                onMouseOver={() => this.openMenu(i)}
                onMouseLeave={() => this.closeMenu()}
              >
                <MenuTitle name={title} />
                <Menu show={showMenuID === i} items={menuItems[title]} />
              </NavItem>
            );
          })}
        </NavList>
      </nav>
    );
  }
}

export default NavBar;
