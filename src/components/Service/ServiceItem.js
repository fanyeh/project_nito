import React, { Component } from 'react';
import ServiceItemHeader from './ServiceItemHeader';
import ServiceItemDescription from './ServiceItemDescription';
const serviceItems = [
  {
    name: 'supoer sonic demo installation',
    description:
      'No more time wasting in data import. We rocket its speed by improving the progress which strikingly reduces your waiting time.',
    id: 0,
  },
  {
    name: 'effortless customization',
    description:
      'Never run into trouble when customizing your website. We created Nito with a mindset of ease your process.',
    id: 1,
  },
  {
    name: 'powerful shortcodes',
    description:
      'There may be some complicated establishing tasks. But no worry as all of those have been solved by Nito’s effective shortcodes system.',
    id: 2,
  },
  {
    name: 'dedicated customer support',
    description:
      'We focus on our customers and listen to all of their problems which will be quickly handled by our experienced developers.',
    id: 3,
  },
];

class ServiceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showID: 0,
      height: 'auto',
    };
    this.servceItemElement = React.createRef();
  }

  showDescription = id => {
    this.setState({ showID: id });
  };

  getDescriptionRect = rect => {
    this.setState({
      height: this.itemHeight + rect.height,
    });
  };

  componentDidMount() {
    const rect = this.servceItemElement.current.childNodes[
      serviceItems.length - 1
    ].getBoundingClientRect();
    this.itemHeight = rect.height;
    this.showDescription(this.state.showID);
  }

  render() {
    return (
      <div ref={this.servceItemElement}>
        {serviceItems.map(item => {
          return (
            <div
              className="ttu serviceItemTransition overflow-hidden"
              key={item.id}
              style={
                this.state.showID === item.id
                  ? { height: `${this.state.height}px` }
                  : { height: `${this.itemHeight}px` }
              }
            >
              <ServiceItemHeader
                name={item.name}
                expand={this.state.showID === item.id}
                onClick={() => this.showDescription(item.id)}
              />
              {this.state.showID === item.id && (
                <ServiceItemDescription
                  description={item.description}
                  rect={this.getDescriptionRect}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ServiceItem;
