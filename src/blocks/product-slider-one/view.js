import domReady from '@wordpress/dom-ready';
import {render, useState,useEffect,unmountComponentAtNode } from '@wordpress/element';
import ProductList from './productapi';



// import { useBlockProps,store as blockStore } from '@wordpress/block-editor';
// import { useSelect, InspectorControl } from '@wordpress/data';

const App= ( props ) =>{
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


    return <div className={`ubp-productlist has-${props.columns}-columns`} >
 
    
    
    <ProductList  styles={props.style} orderBy = {props.orderBy} productCount={props.totalCount} columns={props.columns}  rows={props.rows}  key={props.columns} />
     </div>;
    // return <div ><ProductList count="4"/></div>;

}



domReady( function () {
const getConteiners = document.querySelectorAll('.wpp-app');
console.log('getConteiners',getConteiners);
getConteiners.forEach(item=>{
    const containerAttr = item.getAttribute('woo-p');
    const parseAttr = JSON.parse(containerAttr);
    console.log('parseAttr',parseAttr);
    render(<App {...parseAttr} />,item)
})

// const container = document.querySelector(".wp-block-themehunk-product-slider-one");
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
} );


