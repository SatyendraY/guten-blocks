import { useState } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';

const ProductOrderBy = (props) =>{
    const [ orderby, setOrderBy ] = useState(props.value);

    const options = [
        {
            disabled: true,
            label: 'Select an Option',
            value: ''
          },
        {
            value: 'date',
            label: 'Latest',
        },
        {
            value: 'popularity',
            label: 'Popularity',
        },
        {
            value: 'rating',
            label: 'Average rating',
        },
        {
            value: 'price',
            label: 'Price: low to high',
        },
        {
            value: 'price-desc',
            label: 'Price: high to low',
        },

    ];

    const selectOnChnage = (val) =>{
        setOrderBy(val);
        props.option(val);
        console.log('compo',val);

    }
        return (
        <SelectControl
        label="Product Order By"
        value={ orderby } 
        onBlur={function noRefCheck(){}}
        onChange={selectOnChnage}
        onFocus={function noRefCheck(){}}
        options={options}
      />
    );

}

export default ProductOrderBy;