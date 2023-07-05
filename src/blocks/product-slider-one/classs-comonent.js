import { useState,useEffect,memo,Component } from '@wordpress/element';
import axios from 'axios';
import apiFetch from '@wordpress/api-fetch';





//  function Productapi(props) { 

//   console.log('props',props);

//     const [productList, setProductList] = useState();
//     const [count, setCount] = useState(props.count);

    

//        const handleGenerateCompletions = async () => {
//       try {
//         await apiFetch( {
//           path: `/wc/store/v1/products?per_page=${count}`,
//       } ).then( ( res ) => {
//         setProductList(res);
//       } );

//       //   await axios.get(`/wp572/wp-json/wc/store/v1/products?per_page=${props.count}`).then((response) => {
              
//       // //    console.log(response.data);
//       //     setProductList(response.data);

//       //               });
        
//           // await axios.post('/wp572/wp-json/wc/v1/guten-blocks').then((response) => {
//           //     console.log(response);
              
//           //   });
          
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     useEffect(  () => {
//       console.log('render!');
//       handleGenerateCompletions();

//       return () => console.log('unmounting...');
//     },[]);


//     const  stringToHTML =   (myHTML)=>{
    
//       return (
//         <div dangerouslySetInnerHTML={{ __html: myHTML }} />
//       );
//     }


//     const  listProduct =    ()=>{
//       console.log('mount');

//       if(productList){

//       //   const listItems = numbers.map((number) =>
//       //   <li key={number.toString()}>
//       //     {number}
//       //   </li>
//       // );

//       const listItems =   productList.map((d,i) =>
//       //   let pid = d.id; 
//       //   let title =  d.name;
//       //   let add_to_cart =  d.add_to_cart;
//       //   let description =  d.description;
//       //  let  is_in_stock = d.is_in_stock; // true/false
//       //  let on_sale = d.on_sale; // true/false
//       //  let permalink = d.permalink; 
//       //  let price_html = d.price_html; 
//       //  let short_description = d.short_description; 
//       //  let review_count = d.review_count; 
//       //  let average_rating = d.average_rating; 

//       //  let categories = d.categories;  // array id/name/slug/link
//       //  let tags = d.tags;  // array id/name/slug/link
//       //  let images = d.images;  // array id/alt/name/size/src/srcset/thumbnail
//       //  let prices = d.prices;  // array price/price_range/regular_price/sale_price/currency_code/currency_prefix/currency_symbol/size/src/srcset/thumbnail
//       //   let variation = d.variation; // default blank
    
//         <li className="wc-block-grid__product wc-block-layout" aria-hidden="false" key={i}><div className="wc-block-components-product-image wc-block-grid__product-image">
//         <div className="wc-block-components-product-sale-badge wc-block-components-product-sale-badge--align-right wc-block-grid__product-onsale"><span aria-hidden="true">Sale</span></div>
//         <img data-testid="product-image" alt="Risus nec" src={d.images[0].src} />
        
//         </div>

//        {stringToHTML(d.price_html)}
//         <h2><a href={d.permalink}> {d.name}</a> {props.type}</h2>
//         <div className="wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart"><button aria-label={d.add_to_cart.description} className="wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button">{d.add_to_cart.text}</button></div>
//         </li>


//     ); // llop close
//  //   console.log(listItems);


//     return listItems;
//   }
//     }
//     return <ul>{listProduct()}</ul>;


// }

const Productapi_Memo = memo(Productapi);
export default Productapi_Memo;
