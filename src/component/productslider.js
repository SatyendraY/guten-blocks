import { useState,useEffect,memo } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
// import ProductLoader from '../../component/productloader';
import Slider from "react-slick";
import { ProductSliderLoader } from './productloader';
import {isMobile} from 'react-device-detect';


const borderStyles = (borderValue) =>{
  const styles = {};

  const borderStyle =(border)=>{
      let bcolor = (border.color)?border.color:'';
      let width = (border.width)?border.width:'';
      let style = (border.style)?border.style:'';
      const newBorder = `${bcolor} ${width} ${style}`;
      return newBorder;
  }

      if(borderValue.top){
          styles.borderTop = borderStyle(borderValue.top);
          styles.borderBottom = borderStyle(borderValue.bottom);
          styles.borderLeft = borderStyle(borderValue.left);
          styles.borderRight = borderStyle(borderValue.right);
      }else{
          styles.border = borderStyle(borderValue);
      }
        return styles;
}

const product = (d,styles) => {

  const  stringToHTML =   (myHTML)=>{
    return (
      <div dangerouslySetInnerHTML={{ __html: myHTML }} />
    );
  }
   //   let pid = d.id; 
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

const productType = (type)=>{

    if(type==='simple'){
      return (`add_to_cart_button ajax_add_to_cart ${type}`);

    } else if(type==='variable'){
          return(type);
    }
}

  return <div className="wc-block-slider__product wc-block-layout" aria-hidden="false" key={d.id} style={borderStyles(styles.border)}>
          <div className='ubp-grid-product-block' style={Object.assign({}, {background:styles.background}, borderStyles(styles.border))} >
                <a href={d.permalink}>
                <div className="wc-block-components-product-image wc-block-grid__product-image">
                {d.on_sale && (<div className="wc-block-components-product-sale-badge wc-block-components-product-sale-badge--align-right wc-block-grid__product-onsale"><span aria-hidden="true">Sale</span></div>)}
                <img data-testid="product-image" alt="Risus nec" src={d.images[0] && d.images[0].thumbnail
? d.images[0].thumbnail
:'http://localhost/wp572/wp-content/uploads/woocommerce-placeholder-320x320.png'} />
                </div>
                </a>
                <h2 ><a href={d.permalink} style={{color:styles.title}}> {d.name}</a></h2>
                <span style={{color:styles.pricing}}>{stringToHTML(d.price_html)}</span>
                <div className="th-add-to-cart" >
                  <a style={{background:styles.btnBackground,color:styles.btnTxt}} href={d.add_to_cart.url} data-quantity={d.add_to_cart.multiple_of} className={`button wp-block-button__link wp-element-button ${productType(d.type)}`} data-product_id={d.id} data-product_sku="Woo-beanie-logo" aria-label={d.add_to_cart.description} rel="nofollow">{d.add_to_cart.text}
                  </a>
                </div>
        </div>
    </div>
}


 function ProductSlider(props) { 
  console.log('props',props);
  const {
    totalproduct,
    columns,
    productCount,
    styles,
    orderBy
  } = props;
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [orderby, setOrderBy] = useState(orderBy);

    const [filter,setFilter] = useState({orderby:orderBy,visibleProduct:totalproduct})
        useEffect(  () => {
          handleFetchProduct();
    },[orderBy,totalproduct]);

/** Slider Settings */
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3
// };

/** Slider Rsponsive Settings */

// const settings = {
//   className: "center",
//   centerMode: true,
//   infinite: true,
//   centerPadding: "60px",
//   slidesToShow: 3,
//   speed: 500,
//   rows: 2,
//   slidesPerRow: 2
// };

const isMobileChecker = () =>{
  if (isMobile) {
  return  {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: columns,
    slidesToScroll: 4,
    initialSlide: 4,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: columns,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };
}



return  {
  autoplay: false,
  pauseOnHover: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: columns,
  slidesToScroll: 3,
  className: "slider variable-width"
};
}


/**
 * 
 * @param handleFetchProduct fetch all product
 * @returns All prodcut data
 */

    const handleFetchProduct = async () => {
        setLoading(true);
        let order = 'asc';


      try {
       let data =  await apiFetch( { 
          path: `/wc/store/v1/products?page=${1}&per_page=${totalproduct}&order=${orderby===`price-desc`?`asc`:`desc`}&orderby=${orderby===`price-desc`?`price`:orderby}`,
      } ).then( ( res ) => {
          return res;
      } );
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
    const fetchProductPagination =  async (page=1) => {
      setLoading(true);
    try {
    let data =   await apiFetch( { 
        path: `/wc/store/v1/products?page=${page}&per_page=${totalproduct}&order=${orderby===`price-desc`?`asc`:`desc`}&orderby=${orderby===`price-desc`?`price`:orderby}`,
    } ).then( ( res ) => {
        return res;
    } );
    setLoading(false);
   setProductData(data);
   return page;
    } catch (error) {
      console.log(error);
}
};

return (<Slider className='productSlider' {...isMobileChecker()} >
          {loading && <ProductSliderLoader numLoad={10} />}
          {loading !==true && productData.map((d,i) => {       
          return product(d,styles) })
          }
      </Slider>);
}

//  const ProductSlider = memo(ProductSlider);
export default ProductSlider;
