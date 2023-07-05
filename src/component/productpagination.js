
import { Flex, FlexBlock, FlexItem } from '@wordpress/components';
import { useState,useEffect } from '@wordpress/element';

import ProductLoader from './productloader';


  function Pagination(props){

    const {
      totalvProduct,
      productCount,
    } = props;
    
    const [activeNum, setActiveNum] = useState(1);
    const [loading, setLoading] = useState(true);

   

const handelOnClick = (activeNum)=>{
  props.handelColorPanel(activeNum);
  setActiveNum(activeNum);
}
   

  const ProductPagination = (perPage,totalCount) => {


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

    const hasDecimal = (num) => {
      // Check if the number has a decimal or floating point value
      return num % 1 !== 0;
    }

    let totalPegi = totalCount/perPage;
   // let pegi = Math.trunc(totalPegi);

      let items = [];
      let showPegi = 5; 
      // flot page no value change but int value 1 decrease value
      let pegi = hasDecimal(totalPegi)?Math.trunc(totalPegi):Math.trunc(totalPegi)-1;

      let k=0;
  items.push(<li className={`ubp-pagi__btn ubp-pagi-prev ${activeNum>1 && 'active'}`} onClick={() =>handelOnClick(activeNum-1) }> &laquo;</li>);

  let l = activeNum>pegi?k+activeNum:k;
  for (let i = l; i<=pegi; i++) {
      let j = i+1;
          items.push( <li key={i} className={`wc-block-pagination-page ubp-pagi__numbers ${activeNum===j && 'active'}`}
          onClick={() => handelOnClick(j)}>
          {j}
          </li>);
  }
  items.push(<li className={`ubp-pagi__btn ubp-pagi-next ${activeNum<=pegi && 'active'}`} onClick={() => handelOnClick(activeNum+1)}>&raquo;</li>);
  return items;
  
  }




    return (<div id="ubp-pagination" class="ubp-pagi-container">
    <ul class="ubp-pagi">
      {ProductPagination(totalvProduct, productCount)}  
    </ul>
  </div>)
  }
  
  export default Pagination;


