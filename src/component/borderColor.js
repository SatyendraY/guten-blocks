import { useState,useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { __experimentalBorderBoxControl as BorderBoxControl  } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

const BorderColor = (props) =>{
    const blockEditor = useSelect('core/block-editor').getSettings();
    const defaultBorder = {
        color: '#72aee6',
        style: 'solid',
        width: '1px',
    };

    const [ borders, setBorders ] = useState( props.default );

    useEffect(  () => {
        props.borderStyle({border:borders});
     },[borders]);
    
    const onChange = ( newBorders ) => {
        if(newBorders.style){
            setBorders( {
                top: newBorders,
                right: newBorders,
                bottom: newBorders,
                left: newBorders,
            } )
           
        }else{
            setBorders(newBorders);
        }

        
      
        //     let borders = {};
        // if(newBorders.color){
        //     borders =  {border:`${newBorders.width} ${newBorders.style} ${newBorders.color}`}
        //     console.log(borders);
        // }
    
    };
  
    return  <BorderBoxControl
    colors={ blockEditor.colors }
    label={ __( 'Borders' ) }
    onChange={ onChange }
    value={ borders }
/>;

}
export default BorderColor;
