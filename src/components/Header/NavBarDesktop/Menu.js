import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transitionStyles: {
        entering: { opacity: 0, transform: 'translateY(50px)' },
        entered: {
          opacity: 1,
          transform: 'translateY(0)',
          transition: 'all 500ms',
        },
        exiting: { opacity: 1, transform: 'translateY(0)' },
        exited: { opacity: 0, transform: 'translateY(50px)', transition: 'all 500ms' },
      },
    };
  }

  render() {
    const { transitionStyles } = this.state;
    const { show, items } = this.props;
    return (
      <Transition timeout={0} appear={true} in={show}>
        {state =>
          show && (
            <div
              style={{ ...transitionStyles[state] }}
              className="absolute bg-white ba b--light-gray w-100 pv2 z-1 "
            >
              {items.map((item, index) => {
                return (
                  <div key={index} className="menuItem cp tl pl3 pv3  fw3">
                    {item}
                  </div>
                );
              })}
            </div>
          )
        }
      </Transition>
    );
  }
}

export default Menu;
