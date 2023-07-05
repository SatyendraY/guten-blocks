/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/product-slider-one/productapi.js":
/*!*****************************************************!*\
  !*** ./src/blocks/product-slider-one/productapi.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_productloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/productloader */ "./src/component/productloader.js");
/* harmony import */ var _component_productpagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/productpagination */ "./src/component/productpagination.js");







const product = (d, styles) => {
  const stringToHTML = myHTML => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      dangerouslySetInnerHTML: {
        __html: myHTML
      }
    });
  }; //   let pid = d.id; 
  //   let title =  d.name;
  //   let add_to_cart =  d.add_to_cart;
  //   let description =  d.description;
  //  let  is_in_stock = d.is_in_stock; // true/false
  //  let on_sale = d.on_sale; // true/false
  //  let permalink = d.permalink; 
  //  let price_html = d.price_html; 
  //  let short_description = d.short_description; 
  //  let review_columns = d.review_columns; 
  //  let average_rating = d.average_rating; 
  //  let categories = d.categories;  // array id/name/slug/link
  //  let tags = d.tags;  // array id/name/slug/link
  //  let images = d.images;  // array id/alt/name/size/src/srcset/thumbnail
  //  let prices = d.prices;  // array price/price_range/regular_price/sale_price/currency_code/currency_prefix/currency_symbol/size/src/srcset/thumbnail
  //   let variation = d.variation; // default blank


  const productType = type => {
    if (type === 'simple') {
      return `add_to_cart_button ajax_add_to_cart ${type}`;
    } else if (type === 'variable') {
      return type;
    }
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
    className: "wc-block-grid__product wc-block-layout",
    "aria-hidden": "false",
    key: d.id
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ubp-grid-product-block",
    style: {
      background: styles.background
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: d.permalink
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wc-block-components-product-image wc-block-grid__product-image"
  }, d.on_sale && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wc-block-components-product-sale-badge wc-block-components-product-sale-badge--align-right wc-block-grid__product-onsale"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, "Sale")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    "data-testid": "product-image",
    alt: "Risus nec",
    src: d.images[0] && d.images[0].thumbnail ? d.images[0].thumbnail : 'http://localhost/wp572/wp-content/uploads/woocommerce-placeholder-320x320.png'
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: d.permalink,
    style: {
      color: styles.title
    }
  }, " ", d.name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: styles.pricing
    }
  }, stringToHTML(d.price_html)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-add-to-cart"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    style: {
      background: styles.btnBackground,
      color: styles.btnTxt
    },
    href: d.add_to_cart.url,
    "data-quantity": d.add_to_cart.multiple_of,
    className: `button wp-block-button__link wp-element-button ${productType(d.type)}`,
    "data-product_id": d.id,
    "data-product_sku": "Woo-beanie-logo",
    "aria-label": d.add_to_cart.description,
    rel: "nofollow"
  }, d.add_to_cart.text))));
};

function ProductApi(props) {
  const {
    columns,
    rows,
    productCount,
    styles,
    orderBy
  } = props;
  const [productData, setProductData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [currentPage, setCurrentPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [orderby, setOrderBy] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(orderBy);
  const [filter, setFilter] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    orderby: orderBy,
    visibleProduct: rows * columns
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    handleFetchProduct();
  }, [orderBy, rows, columns]);
  /**
   * 
   * @param handleFetchProduct fetch all product
   * @returns All prodcut data
   */

  const handleFetchProduct = async () => {
    setLoading(true);
    let order = 'asc';

    try {
      let data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: `/wc/store/v1/products?page=${1}&per_page=${columns * rows}&order=${orderby === `price-desc` ? `asc` : `desc`}&orderby=${orderby === `price-desc` ? `price` : orderby}`
      }).then(res => {
        return res;
      });
      setLoading(false);
      setProductData(data);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * 
   * @param fetchProductPagination pegination
   * @returns pegination data
   */


  const fetchProductPagination = async function () {
    let page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    setLoading(true);

    try {
      let data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: `/wc/store/v1/products?page=${page}&per_page=${columns * rows}&order=${orderby === `price-desc` ? `asc` : `desc`}&orderby=${orderby === `price-desc` ? `price` : orderby}`
      }).then(res => {
        return res;
      });
      setLoading(false);
      setProductData(data);
      return page;
    } catch (error) {
      console.log(error);
    }
  };

  const borderStyles = borderValue => {
    const styles = {};

    const borderStyle = border => {
      let bcolor = border.color ? border.color : '';
      let width = border.width ? border.width : '';
      let style = border.style ? border.style : '';
      const newBorder = `${bcolor} ${width} ${style}`;
      return newBorder;
    };

    if (borderValue.top) {
      styles.borderTop = borderStyle(borderValue.top);
      styles.borderBottom = borderStyle(borderValue.bottom);
      styles.borderLeft = borderStyle(borderValue.left);
      styles.borderRight = borderStyle(borderValue.right);
    } else {
      styles.border = borderStyle(borderValue);
    }

    return styles;
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    key: columns,
    gap: "0",
    justify: "JustifyContent",
    wrap: true,
    direction: ["row"],
    style: borderStyles(styles.border)
  }, loading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_component_productloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    numLoad: columns * rows
  }), loading !== true && productData.map((d, i) => {
    return product(d, styles);
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_component_productpagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handelColorPanel: fetchProductPagination,
    totalvProduct: columns * rows,
    productCount: productCount
  }));
}

const ProductList = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.memo)(ProductApi);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);

/***/ }),

/***/ "./src/component/productloader.js":
/*!****************************************!*\
  !*** ./src/component/productloader.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSliderLoader": () => (/* binding */ ProductSliderLoader),
/* harmony export */   "default": () => (/* binding */ ProductLoader)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function ProductLoader(props) {
  let items = [];

  for (let i = 0; i < props.numLoad; i++) {
    items.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
      key: i,
      className: "wc-block-grid__product wc-block-layout is-loading",
      "aria-hidden": "true"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wc-block-components-product-image wc-block-grid__product-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "http://localhost/wp572/wp-content/uploads/woocommerce-placeholder-320x320.png",
      alt: ""
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "wc-block-components-product-title wc-block-grid__product-title"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "wc-block-components-product-price wc-block-grid__product-price price wc-block-components-product-price"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "wc-block-components-product-price__value"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wc-block-components-product-rating wc-block-grid__product-rating"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wc-block-components-product-rating__link",
      href: "undefined#reviews"
    }, "Add review")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button wc-block-components-product-button__button--placeholder",
      disabled: ""
    }))));
  }

  return items;
}
function ProductSliderLoader(props) {
  let items = [];

  for (let i = 0; i < props.numLoad; i++) {
    items.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: i,
      className: "wc-block-slider__product wc-block-layout is-loading",
      "aria-hidden": "true"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wc-block-components-product-image wc-block-grid__product-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "http://localhost/wp572/wp-content/uploads/woocommerce-placeholder-320x320.png",
      alt: ""
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "wc-block-components-product-title wc-block-grid__product-title"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "wc-block-components-product-price wc-block-grid__product-price price wc-block-components-product-price"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "wc-block-components-product-price__value"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wc-block-components-product-rating wc-block-grid__product-rating"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wc-block-components-product-rating__link",
      href: "undefined#reviews"
    }, "Add review")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button wc-block-components-product-button__button--placeholder",
      disabled: ""
    }))));
  }

  return items;
}

/***/ }),

/***/ "./src/component/productpagination.js":
/*!********************************************!*\
  !*** ./src/component/productpagination.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _productloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productloader */ "./src/component/productloader.js");





function Pagination(props) {
  const {
    totalvProduct,
    productCount
  } = props;
  const [activeNum, setActiveNum] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  const handelOnClick = activeNum => {
    props.handelColorPanel(activeNum);
    setActiveNum(activeNum);
  };

  const ProductPagination = (perPage, totalCount) => {
    // <div id="ubp-pagination" class="ubp-pagi-container">  
    // <ul class="ubp-pagi">
    //     <li class="ubp-pagi__btn ubp-pagi-prev"> &laquo;</li>
    //     <li class="ubp-pagi__numbers"> 1</li>
    //     <li class="ubp-pagi__numbers active">2</li>
    //     <li class="ubp-pagi__numbers">3</li>
    //     <li class="ubp-pagi__numbers">4</li>
    //     <li class="ubp-pagi__numbers">5</li>
    //     <li class="ubp-pagi__numbers">6</li>
    //     <li class="ubp-pagi__dots">...</li>
    //     <li class="ubp-pagi__numbers"> 10</li>
    //     <li class="ubp-pagi__btn ubp-pagi-next">&raquo;</li>
    //   </ul>
    // </div>
    const hasDecimal = num => {
      // Check if the number has a decimal or floating point value
      return num % 1 !== 0;
    };

    let totalPegi = totalCount / perPage; // let pegi = Math.trunc(totalPegi);

    let items = [];
    let showPegi = 5; // flot page no value change but int value 1 decrease value

    let pegi = hasDecimal(totalPegi) ? Math.trunc(totalPegi) : Math.trunc(totalPegi) - 1;
    let k = 0;
    items.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `ubp-pagi__btn ubp-pagi-prev ${activeNum > 1 && 'active'}`,
      onClick: () => handelOnClick(activeNum - 1)
    }, " \xAB"));
    let l = activeNum > pegi ? k + activeNum : k;

    for (let i = l; i <= pegi; i++) {
      let j = i + 1;
      items.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: i,
        className: `wc-block-pagination-page ubp-pagi__numbers ${activeNum === j && 'active'}`,
        onClick: () => handelOnClick(j)
      }, j));
    }

    items.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `ubp-pagi__btn ubp-pagi-next ${activeNum <= pegi && 'active'}`,
      onClick: () => handelOnClick(activeNum + 1)
    }, "\xBB"));
    return items;
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "ubp-pagination",
    class: "ubp-pagi-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    class: "ubp-pagi"
  }, ProductPagination(totalvProduct, productCount)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************************!*\
  !*** ./src/blocks/product-slider-one/view.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _productapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productapi */ "./src/blocks/product-slider-one/productapi.js");



 // import { useBlockProps,store as blockStore } from '@wordpress/block-editor';
// import { useSelect, InspectorControl } from '@wordpress/data';

const App = props => {
  // const [counter,setCounter] = useState(0);
  // useEffect(()=>{
  //    const timeout =  setInterval(()=>{
  //         setCounter((counter)=> counter+1);
  //     },1000);
  //     return()=>{
  //         clearTimeout(timeout);
  //     }
  // },[counter]);
  // let productStyle = 
  // {
  //   background:props.bg_color,
  //   title:props.title_color,
  //   btnTxt:props.btnText_color,
  //   btnBackground:props.btnBg_color,
  //   pricing:props.priceText_color,
  //   cross:props.priceCross_color
  // };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `ubp-productlist has-${props.columns}-columns`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_productapi__WEBPACK_IMPORTED_MODULE_2__["default"], {
    styles: props.style,
    orderBy: props.orderBy,
    productCount: props.totalCount,
    columns: props.columns,
    rows: props.rows,
    key: props.columns
  })); // return <div ><ProductList count="4"/></div>;
};

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  const getConteiners = document.querySelectorAll('.wpp-app');
  console.log('getConteiners', getConteiners);
  getConteiners.forEach(item => {
    const containerAttr = item.getAttribute('woo-p');
    const parseAttr = JSON.parse(containerAttr);
    console.log('parseAttr', parseAttr);
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(App, parseAttr), item);
  }); // const container = document.querySelector(".wp-block-themehunk-product-slider-one");
  // const observer = new IntersectionObserver(function (entries){
  // 	// since there is a single target to be observed, there will be only one entry
  // 	if(entries[0]['isIntersecting'] === true) {
  //        // console.log('true intersection',entries[0]['intersectionRatio']);
  // 		if(entries[0]['intersectionRatio'] === 1) render(<App />,container);
  //           //do something after DOM loads.
  // 			//console.log('Target is fully visible in the screen');
  // 		// else if(entries[0]['intersectionRatio'] > 0.5)
  // 		// 	console.log('More than 50% of target is visible in the screen');
  // 		// else 
  // 		// 	console.log('Less than 50% of target is visible in the screen');
  // 	}
  // 	else {
  //         unmountComponentAtNode(container);
  // 		console.log('Target is not visible in the screen');
  // 	}
  // }, 
  // { threshold: [0, 1] }
  // );
  //  //observer.observe(container);
  //  render(<App />,container)
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map