/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';
 import { Icon, ColorPalette ,Placeholder,Panel,TabPanel, PanelBody, PanelRow,TextControl,Button,Dropdown,FontSizePicker ,
    __experimentalInputControl as InputControl,
    BaseControl,TextareaControl,ToggleControl,RadioControl,ToolbarGroup, ToolbarButton,FormFileUpload   } from '@wordpress/components';
 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
 import { useBlockProps,RichText,InspectorControls,BlockControls,AlignmentToolbar } from '@wordpress/block-editor';
//  import { useState } from '@wordpress/element';
 /**
  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
  * Those files can contain any CSS code that gets applied to the editor.
  *
  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
  */
 import './editor.scss';
 import './toolBarc';
 /**
  * The edit function describes the structure of your block in the context of the
  * editor. This represents what the editor will render when the block is used.
  *
  * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
  *
  * @return {WPElement} Element to render.
  */
  import { useState } from '@wordpress/element';


  const colors = [
    { name: 'red', color: '#f00' },
    { name: 'blck', color: '#000' },
    { name: 'blue', color: '#00f' },
]; 

//const [ fontSize, setFontSize ] = useState( 16 );
const fontSizes = [
    {
        name: __( 'Tiny' ),
        slug: 'tiny',
        size: 10,
    },
    {
        name: __( 'Small' ),
        slug: 'small',
        size: 12,
    },
    {
        name: 'Normal',
        slug: 'normal',
        size: 16,
        },
    {
        name: __( 'Big' ),
        slug: 'big',
        size: 26,
    },
    {
        name: 'Huge',
        slug: 'huge',
        size: 36,
        },
];
// const fallbackFontSize = 26;
   
  export default function Edit( { attributes, isSelected, setAttributes } ) {
    const blockProps = useBlockProps();
    const {
        leadName,
        leadEmail,
        alignment,
        url,
        title,
        size,
        text,
        bg_color,
        text_color,
        desc_color,
        headingText,
        fsize,
        textArea,
        MyToggleControl,
        taboption
      } = attributes;



    {console.log(attributes)}

    //const [ fontSize, setFontSize ] = useState( 12 );

    const onChangeAlignment = ( newAlignment ) => {
        
        setAttributes( {
            alignment: newAlignment === undefined ? 'none' : newAlignment,
        } );
    };

    const onSelect = ( tabName ) => {
        setAttributes( {taboption:tabName});
        console.log( 'Selecting tab', tabName );
    };
    return (<>
        <div { ...blockProps } style={{background:attributes.bg_color}}>
                           

        <InspectorControls key="setting">
             <Panel header="Block Panel">

             <PanelBody title="Block Options"  initialOpen={ true }>

             <FormFileUpload
        accept="image/*"
        onChange={ ( event ) => console.log( event.target.files ) }
    >
    </FormFileUpload>


             <TabPanel
                className="my-tab-panel"
                activeClass="active-tab"
                onSelect={ onSelect }
                tabs={ [
                    {
                        name: 'tab1',
                        title: 'Tab 1',
                        className: 'tab-one',
                    },
                    {
                        name: 'tab2',
                        title: 'Tab 2',
                        className: 'tab-two',
                    },
                ] }
            >
                { ( tab ) => <p>{ tab.title }</p> }
                </TabPanel>

                <div className='tab-two'>
                        <RadioControl
                label="User type"
                help="The type of the current user"
                selected={ attributes.roption }
                options={ [
                    { label: 'Author', value: 'a' },
                    { label: 'Editor', value: 'e' },
                ] }
                onChange={ ( value ) => setAttributes( {roption:value} ) }
                />
                </div>
                <div className='tab-one active-tab'>

             <TextareaControl
                    label="Text"
                    help="Enter some text"
                    value={attributes.textArea}
                    onChange={ ( value ) => setAttributes( {textArea:value} ) }
                />

                <ToggleControl
                            label="Fixed Background"
                            help={
                                attributes.MyToggleControl
                                    ? 'Has fixed background.'
                                    : 'No fixed background.'
                            }
                            checked={ attributes.MyToggleControl }
                            onChange={ (toggle) => {
                                setAttributes( { MyToggleControl: toggle } );
                            } }
                        />
                        </div>

            </PanelBody>




                     <PanelBody title="Block Settings"  initialOpen={ true }>

                     <FontSizePicker
                            fontSizes={ fontSizes }
                            value={ attributes.fsize }
                            fallbackFontSize={ attributes.fsize  }
                            onChange={ ( newFontSize ) => {
                                setAttributes( {fsize:newFontSize} );
                            } }
                        />


                     <fieldset>
                        <legend className="blocks-base-control__label">
                                { __( 'Background', 'gutenpride' ) }
                            </legend>
                        <ColorPalette
                          label={ __( 'Background Color' ) }
                            colors={ colors }
                            value={ attributes.bg_color }
                            onChange={ ( color ) => setAttributes( { bg_color: color }  ) }
                        />
                        </fieldset>
                        <fieldset>
                        <legend className="blocks-base-control__label">
                                { __( 'Heading', 'gutenpride' ) }
                            </legend>
                        <ColorPalette
                        className="components-color-list-picker__color-picker"
                            value={ attributes.text_color }
                            onChange={ ( color ) => setAttributes( ( { text_color: color } ) ) }
                        />
                        </fieldset>
                        <fieldset>
                        <legend className="blocks-base-control__label">
                                { __( 'Description', 'gutenpride' ) }
                            </legend>

                        <ColorPalette
                          label={ __( ' Description Text' ) }
                            value={ attributes.desc_color }
                            onChange={ ( color ) => setAttributes( ( { desc_color: color } ) ) }
                        />
                        </fieldset>
                       
                    </PanelBody>
                </Panel>
        </InspectorControls>
    
                        <RichText 
                         tagName="h2"
                             key = 'title2'
                            value={ attributes.headingText }
                            allowedFormats={ [ 'core/bold', 'core/italic' ] }
                            onChange={ ( val ) =>
                                        setAttributes( { headingText: val } )
                                    }
                    />
                    <RichText 
                         tagName="h3"
                            style={ { textAlign: attributes.alignment, fontSize:attributes.fsize,
                            color:attributes.text_color } }
                             key = 'title'
                            value={ attributes.title }
                            allowedFormats={ [ 'core/bold', 'core/italic' ] }
                            onChange={ ( val ) =>
                                        setAttributes( { title: val } )
                                    }
                    />

                    <RichText 
                            tagName="div"
                                style={ { textAlign: attributes.alignment,color:attributes.desc_color } }
                                key = 'text'
                                value={ attributes.text }
                                allowedFormats={ [ 'core/bold', 'core/italic' ] }
                                onChange={ ( val ) =>
                                            setAttributes( { text: val } )
                                        }
                    />
                      <BlockControls>
                        <ToolbarGroup>
                            <AlignmentToolbar
                                value={ attributes.alignment }
                                onChange={ onChangeAlignment }
                            />
                        </ToolbarGroup>
                        </BlockControls>  
                        
            </div>
        
            </>);
}