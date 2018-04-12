import React, { Component } from 'react';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

const menuItems = {
  Home: ['Home Classic', 'Home Carousel', 'Home Showcase'],
  Pages: ['About me', 'About us', 'Products', 'Services', '404'],
  Portfolio: ['Portfolio 1', 'Portfolio 2', 'Portfolio 3'],
  Gallery: ['Classic', 'Filter', 'Single Project 1', 'Single Project 2'],
  Blog: ['Blog Classic', 'Image Post', 'Slider Post', 'Video Post', 'Facebook Post'],
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { showMobileNavBar: false };
  }

  componentDidMount() {
    this.setMenu();
    window.addEventListener('resize', this.setMenu);
  }

  setMenu = () => {
    window.screen.availWidth < 1025
      ? this.setState({ showMobileNavBar: true })
      : this.setState({ showMobileNavBar: false });
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.setMenu);
  }

  render() {
    return (
      <header>
        {this.state.showMobileNavBar ? (
          <NavBarMobile menuItems={menuItems} />
        ) : (
          <NavBarDesktop menuItems={menuItems} />
        )}
      </header>
    );
  }
}

export default Header;
