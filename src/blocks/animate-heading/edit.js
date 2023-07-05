/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';
 import { Panel, PanelBody, PanelRow,TextControl,Button,FocusableIframe,ResizableBox,RangeControl,Placeholder ,
    FormFileUpload, FontSizePicker, __experimentalHeading as Heading, __experimentalInputControl as InputControl } from '@wordpress/components';
 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
 import { useBlockProps,RichText,InspectorControls,MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
//  import { useState } from '@wordpress/element';
 /**
  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
  * Those files can contain any CSS code that gets applied to the editor.
  *
  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
  */
 import './editor.scss';
 import { image } from '@wordpress/icons';

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
        console.log(attributes);
    const {
        title,
        fontSize,
        imageUrl,
        fontFamily
      } = attributes;

      const fontSizes = [
        {
            name: __( 'Small' ),
            slug: 'small',
            size: 40,
        },
        {
            name: 'Normal',
            size: 50,
            slug: 'normal'
          },
        {
            name: __( 'Big' ),
            slug: 'big',
            size: 60,
        },
        {
            name: 'Bigger',
            size: 80,
            slug: 'bigger'
          },
          {
            name: 'Huge',
            size: 100,
            slug: 'huge'
          }
    ];
    const fallbackFontSize = 16;
    const ALLOWED_MEDIA_TYPES = [ 'image' ];
     return (
         <div { ...blockProps }>

            <InspectorControls key="setting">
             <Panel>
                <PanelBody title="Animation Heading"  initialOpen={ true }>
                <PanelRow aria-labelledby="tab-panel-0-styles" role="tabpanel" id="tab-panel-0-styles-view" class="components-tab-panel__tab-content">
                <InputControl
                        label="Heading"
                        value={ title }
                        placeholder="Heading..."
                        onChange={ ( val ) => setAttributes( { title: val } ) }
                        />
                                </PanelRow>

 <PanelRow>
                <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={ fontSizes }
            value={ fontSize }
            fallbackFontSize={ fallbackFontSize }
            onChange={ ( newFontSize ) => setAttributes( { fontSize: newFontSize } ) }

        />
        </PanelRow>
              

                                <PanelRow>
                <Placeholder
                icon={image}
                label="Image Upload"
                >
  <div>
            <div><img src={imageUrl} style={{height:"100px"}}/></div>
                <MediaUploadCheck>
			    <MediaUpload
				onSelect={ ( media ) => setAttributes( { imageUrl: media.url } )}
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				render={ ( { open } ) => (
					<Button variant="secondary" onClick={ open }>Upload Image</Button>
				) }
			/>
		</MediaUploadCheck>
        </div>
</Placeholder>
 </PanelRow>
                </PanelBody>
             </Panel>
             </InspectorControls>
             
             <Heading className="animate-heading" 
             style={{fontFamily:fontFamily,fontSize:fontSize, backgroundImage:`url("${imageUrl}")`}}
             color="transparent"
             
             > { title }   </Heading>
             {/* <RichText 
                tagName="h2"
                value={ title }
                allowedFormats={ [ 'core/bold', 'core/italic' ] }
                onChange={ ( val ) =>
                            setAttributes( { title: val } )
                        }
                placeholder={ __( 'Heading...' ) }
                    /> */}


                    
                 
         </div>
     );
 }
 