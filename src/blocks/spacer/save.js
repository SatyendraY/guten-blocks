/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';

 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
  import { useBlockProps,RichText } from '@wordpress/block-editor';
 
 /**
  * The save function defines the way in which the different attributes should
  * be combined into the final markup, which is then serialized by the block
  * editor into `post_content`.
  *
  * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
  *
  * @return {WPElement} Element to render.
  */

  const allBorderStyle =(border)=>{
    let bcolor = (border.color)?border.color:'';
    let width = (border.width)?border.width:'';
    let style = (border.style)?border.style:'';
    const newborder = `${bcolor} ${width} ${style}`;
    return newborder;
}

const addBorderStyle = (border,styles)=> {
        if(border){
            if(border.top){
                styles.borderTop = allBorderStyle(border.top);
                styles.borderBottom = allBorderStyle(border.bottom);
                styles.borderLeft = allBorderStyle(border.left);
                styles.borderRight = allBorderStyle(border.right);
            }else{
                styles.border = allBorderStyle(border);

            }

            return styles;
        }
    }


 export default function save({ attributes}) {
   // const blockProps = useBlockProps.save();

    
    const {
        space,
        height,
        padding,
        margin,
        border,
        border_radius,
        background
      } = attributes;


      const styles = {
        background:background,
        height:height,
        padding:`${padding.top} ${padding.left} ${padding.right} ${padding.bottom}`,
        margin:`${margin.top} ${margin.left} ${margin.right} ${margin.bottom}` ,
        borderRadius:`${border_radius.top} ${border_radius.left} ${border_radius.right} ${border_radius.bottom}`
        }
        addBorderStyle(border,styles);
        const blockProps = useBlockProps.save( { style: styles } );
        console.log(styles);
     return (
         <div { ...blockProps } >
         </div>
     );
 }
 