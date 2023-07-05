/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';
 import { Panel, PanelBody, PanelRow,TextControl,Button,FocusableIframe,ResizableBox,RangeControl,ToolbarGroup  } from '@wordpress/components';
 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
 import { useBlockProps,RichText,InspectorControls,InnerBlocks,useInnerBlocksProps  } from '@wordpress/block-editor';
//  import { useState } from '@wordpress/element';
 /**
  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
  * Those files can contain any CSS code that gets applied to the editor.
  *
  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
  */
 import './editor.scss';
 
 /**
  * The edit function describes the structure of your block in the context of the
  * editor. This represents what the editor will render when the block is used.
  *
  * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
  *
  * @return {WPElement} Element to render.
  */
 export default function Edit({ attributes, setAttributes } ) {
    const blockProps = useBlockProps();
    const MY_TEMPLATE = [ [ 'themehunk/product-slider-one', {} ],
    [ 'core/paragraph', { placeholder: 'Summary' } ]
 ];


    const {
        thmap,
        height,
        width,
        recordId 
      } = attributes;


      const combinedBlockProps = useInnerBlocksProps(
        blockProps,
        {
            allowedBlocks: [ 'core/heading','themehunk/product-slider-one' ]
        }
    );

     return (
         <div { ...combinedBlockProps }>
            <InspectorControls key="setting">
             <Panel header="title">
                <PanelBody title="title"  initialOpen={ true }>
                </PanelBody>
             </Panel>
             </InspectorControls>


             <TextControl
                label={ __( 'Record ID:' ) }
                value={ recordId }
                onChange={ ( val ) =>
                    setAttributes( { recordId: Number( val ) } )
                }
            />
            
            <InnerBlocks template={ MY_TEMPLATE } templateLock="all" />

         </div>
     );
 }
 