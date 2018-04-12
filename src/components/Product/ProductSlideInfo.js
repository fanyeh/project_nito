import React, { Component } from 'react';
import classNames from 'classnames';

class ProductSlideInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfoStyles: ['productInfo', 'absolute', 'bottom-0', 'pb4', 'overflow-hidden'],
    };
  }

  componentDidMount() {
    let newProductInfoStyles = this.state.productInfoStyles.slice();
    newProductInfoStyles.push('hover');
    setTimeout(() => {
      this.setState({
        productInfoStyles: newProductInfoStyles,
      });
    }, 0);
  }

  render() {
    const { productInfoStyles } = this.state;
    return (
      <div className="absolute left-1 right-1 top-1 bottom-1 bg-white ">
        <div className={classNames(productInfoStyles)}>
          <h1 className="relative garamond f2 tracked-tight pl4 mb4 dim cp">
            The end of social media
          </h1>
          <span className="pl4 i garamond cp dim">Creative Strategy</span>
        </div>
      </div>
    );
  }
}

export default ProductSlideInfo;
