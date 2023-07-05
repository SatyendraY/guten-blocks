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
  export default function save( { attributes } ) {
    const blockProps = useBlockProps.save();
    return (<div style={ { textAlign: attributes.alignment,background:attributes.bg_color,fontSize:attributes.fsize } }> 
               <RichText.Content { ...blockProps } 
               tagName="h3" 
               value={ attributes.title } 
               style={{color:attributes.text_color}}
               />
               <RichText.Content { ...blockProps } 
               tagName="div" 
               value={ attributes.text }
               style={{color:attributes.desc_color}}
               />

               <RichText.Content { ...blockProps } 
               tagName="span" 
               value={ attributes.textArea }
               />

          <RichText.Content { ...blockProps } 
               tagName="h2" 
               value={ attributes.headingText }
               style={{color:attributes.desc_color}}

               />
   </div>);
}
 


