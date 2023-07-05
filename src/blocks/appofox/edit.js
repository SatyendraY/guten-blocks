/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';
 import { Panel, PanelBody, PanelRow,TextControl,Button,FocusableIframe,ResizableBox,RangeControl,ToolbarGroup,
    Placeholder  } from '@wordpress/components';
 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
 import { useBlockProps,RichText,InspectorControls } from '@wordpress/block-editor';
 import { shortcode } from '@wordpress/icons';
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

    const {
        thmap,
        height,
        width
      } = attributes;

     return (
         <div { ...blockProps }>
            <InspectorControls key="setting">
             <Panel header="title">
                <PanelBody title="title"  initialOpen={ true }>
                </PanelBody>
             </Panel>
             </InspectorControls>



<Placeholder
  icon={ shortcode }
  label="AppoFox Shortcode">
  <div>
    <TextControl
      __nextHasNoMarginBottom
      label="Shortcode"
      onChange={ ( val ) =>
                            setAttributes( { thmap: val } )
                        }
      placeholder="Enter something here"
      value={thmap}
    />
  </div>
</Placeholder>
             {/* <RichText 
                tagName="div"
                value={ thmap }
                allowedFormats={ [ 'core/bold', 'core/italic' ] }
                onChange={ ( val ) =>
                            setAttributes( { thmap: val } )
                        }
                    /> */}

         </div>
     );
 }
 