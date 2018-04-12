import React, { Component } from 'react';
import NavList from './../NavList';
import Brand from './../Brand';
import NavItem from './../NavItem';
import MenuMobile from './MenuMobile';
import { Transition } from 'react-transition-group';

const duration = 100;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

class NavBarMobile extends Component {
  constructor(props) {
    super(props);
    this.state = { menuHeight: 0, openMenu: false };
    this.navListElement = React.createRef();
  }

  showMenu = () => {
    this.setState((prevState, props) => ({
      openMenu: !prevState.openMenu,
    }));
  };

  componentDidMount() {
    this.setState({
      menuHeight: this.navListElement.current.getBoundingClientRect().height,
    });
  }

  render() {
    return (
      <nav>
        <NavList className="justify-between items-center relative" navListRef={this.navListElement}>
          <NavItem mobile className="ml5-ns ml3">
            <Brand name="nito." className="ph2 pv4-ns pv2" />
          </NavItem>
          <NavItem mobile className="mr5-ns mr3">
            <i className="fas fa-bars fa-2x moon-gray" onClick={this.showMenu} />
          </NavItem>

          <Transition in={this.state.openMenu} timeout={duration}>
            {state => (
              <MenuMobile
                style={{
                  top: `${this.state.menuHeight}px`,
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
                items={this.props.menuItems}
              />
            )}
          </Transition>
        </NavList>
      </nav>
    );
  }
}

export default NavBarMobile;
