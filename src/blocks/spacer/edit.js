/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';
 import { Panel, PanelBody, PanelRow,TextControl,Button,FocusableIframe,ResizableBox,RangeControl,ToolbarGroup,ColorPicker,
    __experimentalBoxControl as BoxControl, __experimentalBorderBoxControl as BorderBoxControl  } from '@wordpress/components';
 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
 import { useBlockProps,RichText,InspectorControls } from '@wordpress/block-editor';
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

  const partialRight =( fn, ...partialArgs ) =>( ...args ) =>fn( ...args, ...partialArgs );



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

 export default function Edit({ attributes, setAttributes,clientId  } ) {
    const blockProps = useBlockProps();
    console.log(attributes.border_radius);

    const {
        space,
        height,
        padding,
        margin,
        border,
        border_radius,
        background,
      } = attributes;

      
    const colors = [
        { name: 'Blue 20', color: '#72aee6' }
    ];
    
      const enable = {
        top: false,
        right: false,
        bottom: true,
        left: false,
        topRight: false,
        bottomRight: true,
        bottomLeft: false,
        topLeft: false,
    };

    const styles = {
        background:background,
        height:height,
        padding:`${padding.top} ${padding.left} ${padding.right} ${padding.bottom}`,
        margin:`${margin.top} ${margin.left} ${margin.right} ${margin.bottom}` ,
        borderRadius:`${border_radius.top} ${border_radius.left} ${border_radius.right} ${border_radius.bottom}`,
        }
        addBorderStyle(border,styles);

             const flatBorder = { color: '#72aee6', style: 'solid', width: '1px' };
            const splitBorders = {
                top: { color: '#72aee6', style: 'solid', width: '1px' },
                right: { color: '#e65054', style: 'dashed', width: '2px' },
                bottom: { color: '#68de7c', style: 'solid', width: '1px' },
                left: { color: '#f2d675', style: 'dotted', width: '1em' },
            };

     return (
         <div { ...blockProps }>
            <InspectorControls key="setting">
             <Panel header="Specer">
                <PanelBody title="Layout"  initialOpen={ true }>
                <ColorPicker
            color={background}
            onChange={ ( newBg ) => setAttributes( {background:newBg }) }
            enableAlpha
            defaultValue={background}
        />

                <RangeControl
                    help="Please select how transparent you would like this."
                    initialPosition={height}
                    label="Height"
                    max={900}
                    min={0}
                    onChange={ ( val ) =>
                            setAttributes( { height: val } )
                        }
                    />
                        <BoxControl
                                label = {__( 'Margin' )}
                                values={ margin }
                                onChange={ ( val ) => 
                            setAttributes( { margin: val } )}
                          />

                            <BoxControl
                                label = {__( 'Padding' )}
                                values={ padding }
                                onChange={ ( val ) => 
                            setAttributes( { padding: val } )}
                          />

                </PanelBody>

                <PanelBody title="Border"  initialOpen={ true }>

                
                     <BorderBoxControl
                        colors={ colors }
                        label={ __( 'Borders' ) }
                        onChange={ ( newBorders ) => setAttributes( {border:newBorders }) }
                        value={ border }
                    />

                        <BoxControl
                                class = "bradius"
                                label = {__( 'Border Radius' )}
                                values={ border_radius }
                                onChange={ ( val ) => 
                            setAttributes( { border_radius: val } )}
                          />


                </PanelBody>
             </Panel>
             </InspectorControls>

             <div style={styles}></div>
         </div>
     );
 }
 