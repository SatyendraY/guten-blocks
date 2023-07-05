
import { Flex, FlexBlock, FlexItem } from '@wordpress/components';

export default function ProductLoader(props){
    let items = [];
    for (let i = 0; i < props.numLoad; i++) {
      items.push(<FlexItem key={i} className="wc-block-grid__product wc-block-layout is-loading" aria-hidden="true">
      <div className="wc-block-components-product-image wc-block-grid__product-image">
      <img src="http://localhost/wp572/wp-content/uploads/woocommerce-placeholder-320x320.png" alt=""/></div>
      <h2 className="wc-block-components-product-title wc-block-grid__product-title"></h2><span className="wc-block-components-product-price wc-block-grid__product-price price wc-block-components-product-price"><span className="wc-block-components-product-price__value"></span></span>
      <div className="wc-block-components-product-rating wc-block-grid__product-rating"><a className="wc-block-components-product-rating__link" href="undefined#reviews">Add review</a></div>
      <div className="wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart"><button className="wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button wc-block-components-product-button__button--placeholder" disabled=""></button>
      </div>
      </FlexItem>);
    }

    return items;

}

export function ProductSliderLoader(props){
  let items = [];
  for (let i = 0; i < props.numLoad; i++) {
    items.push(<div key={i} className="wc-block-slider__product wc-block-layout is-loading" aria-hidden="true">
    <div className="wc-block-components-product-image wc-block-grid__product-image">
    <img src="http://localhost/wp572/wp-content/uploads/woocommerce-placeholder-320x320.png" alt=""/></div>
    <h2 className="wc-block-components-product-title wc-block-grid__product-title"></h2><span className="wc-block-components-product-price wc-block-grid__product-price price wc-block-components-product-price"><span className="wc-block-components-product-price__value"></span></span>
    <div className="wc-block-components-product-rating wc-block-grid__product-rating"><a className="wc-block-components-product-rating__link" href="undefined#reviews">Add review</a></div>
    <div className="wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart"><button className="wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button wc-block-components-product-button__button--placeholder" disabled=""></button>
    </div>
    </div>);
  }

  return items;

}
