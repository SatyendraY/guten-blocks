/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';
 import { Panel, PanelBody,TabPanel,TextControl,Button,RangeControl,ToolbarGroup,Toolbar,ToolbarItem,DropdownMenu ,ToolbarDropdownMenu,ToolbarButton ,
    VisuallyHidden,Disabled,ColorPalette, Popover,Dropdown,GradientPicker ,
    __experimentalHeading as Heading  } from '@wordpress/components';
 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
 import { useBlockProps,RichText,InspectorControls,store as blockStore,BlockControls,AlignmentToolbar  } from '@wordpress/block-editor';
import { useSelect, InspectorControl,createReduxStore,register,dispatch   } from '@wordpress/data';
 /**
  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
  * Those files can contain any CSS code that gets applied to the editor.
  *
  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
  */
 import './editor.scss';
 import { useState,useEffect } from '@wordpress/element';
 import { Icon, cog,styles, more,
  arrowLeft,
  arrowRight,
  arrowUp,
  arrowDown,
  positionCenter,
  alignNone,
  stretchFullWidth,
  stretchWide, } from '@wordpress/icons';
 /**
  * The edit function describes the structure of your block in the context of the
  * editor. This represents what the editor will render when the block is used.
  *
  * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
  *
  * @return {WPElement} Element to render.
  */
 import apiFetch from '@wordpress/api-fetch';
 import EditorTab from './tab';
 import ColorPanel from '../../component/colorpanel';
 import ProductOrderBy from '../../component/productorderby';
import BorderColor from '../../component/borderColor';
import ProductSlider from '../../component/productslider';

// const store = createReduxStore( 'demo', {
//   reducer: ( state = 'OK' ) => state,
//   selectors: {
//       getValue: ( state ) => state,
//   },
// } );
// register( store );

// dispatch(store,demo('find new value'));

// console.log(store);

 export default function Edit({ clientId,attributes, setAttributes } ) {
   // Retrieve the themes color settings from the block editors' data
   //const blockEditor = useSelect('core/block-editor').getSettings();

   //console.log(blockEditor);


    //  blockEditor.styles[3].css = '.entry-content { background:orange;}';
   
    // //Object.assign({}, blockEditor.styles,  []);

    const blockProps = useBlockProps({});
    const {
      totalproduct,
        columns,
        totalCount,
        bg_color,
        title_color,
        btnText_color,
        btnBg_color,
        priceText_color,
        priceCross_color,
        alignment,
        orderBy,
        border,
        style
      } = attributes;
      const fetchTotalProduct =   async () => {
      try {
       let data =    await apiFetch( { 
          path: `wc/v1/guten-blocks`,
      } ).then( ( res ) => {
        setAttributes({totalCount:res.totalproduct})

      } );
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(  () => {
        fetchTotalProduct();
      },[]);
        //Object.assign({}, {background:'red'}, border)
    const panelSettings = () => {
      return(<Panel>
      <PanelBody title="Layout Settings"  initialOpen={ true }>
      <VisuallyHidden>
      <TextControl value={ totalCount } />
      </VisuallyHidden>
      <RangeControl
      value={totalproduct}
      label="Number Of Product"
      step="1"
      min={3}
      max={totalCount}
      onChange={ ( val ) => setAttributes( {totalproduct:val} ) }
      />
      <RangeControl
      value={columns}
      label="COLUMNS"
      step="1"
      min={1}
      max={6}
      onChange={ ( val ) => setAttributes( {columns:val} ) }
      />
      <ProductOrderBy option={(val) =>  setAttributes({orderBy:val})  } value={orderBy}/>
      </PanelBody>

      <PanelBody>
      <BorderColor borderStyle={(val)=> setAttributes({style:Object.assign({}, style, val)})} default={style.border}/>
          
      </PanelBody>
   </Panel>);
    }

    const handelBackgroundColor = (colordata) => {
         setAttributes(colordata);
         setAttributes({style:Object.assign({}, style, colordata)});
    }

    const panelStyles = () => {
      return(<Panel>
      <PanelBody title="Style"  initialOpen={ true }>
      <Heading className='ubp-h2-heading'>Background & Title</Heading>
        <ColorPanel key={1}
        colorTool ={ [
      {
        active : ['gradient','color'],
        name: 'Background',
        value: style.background,
        attribute: 'background',
      },
      {
        active : ['color'],
        name: 'Title',
        value: style.title,
        attribute: 'title',
      }
  
    ] }
        handelColorPanel={handelBackgroundColor}
        />
    <Heading className='ubp-h2-heading'>Add to Cart Button</Heading>
        <ColorPanel key={2}
        colorTool ={ [
      {
        active : ['color'],
        name: 'Text',
        value: style.btnTxt,
        attribute: 'btnTxt',
      },
      {
        active : ['gradient','color'],
        name: 'Background',
        value: style.btnBackground,
        attribute: 'btnBackground',
      }
    ] }
        handelColorPanel={handelBackgroundColor}
        />

<Heading className='ubp-h2-heading'>Pricing</Heading>
        <ColorPanel key={2}
        colorTool ={ [
      {
        active : ['color'],
        name: 'Text',
        value: style.pricing,
        attribute: 'pricing',
      },
      {
        active : ['color'],
        name: 'Cross Pricing',
        value: style.cross,
        attribute: 'cross',
      }
    ] }
        handelColorPanel={handelBackgroundColor}
        />
      </PanelBody>
   </Panel>);
    }



    const panelSelect = ( tabName ) => {
      if(tabName==='settings') {
          return panelSettings();
      } else if(tabName==='styles'){
        return panelStyles();
      }
  };


     return (
         <div { ...blockProps }>
            <InspectorControls key="setting">

            <VisuallyHidden>
               <TextControl value={ totalCount } />
              </VisuallyHidden>

            <TabPanel
            activeClass="is-active"
            tabs={ [
                {
    
                icon: <Icon icon={ cog } />,
                    name: 'settings',
                    title: 'Settings',
                    className: 'block-editor-block-inspector__tab-item',
                },
                {
                icon: <Icon icon={ styles } />,
                    name: 'styles',
                    title: 'Style',
                    className: 'block-editor-block-inspector__tab-item',
                },
            ] }
            >
            { ( tab ) =><div>{panelSelect(tab.name)} </div>  }
            </TabPanel>
             </InspectorControls>
                     <Disabled isDisabled>
                  <div id="ubp-produc-slider">
                     <ProductSlider styles={style} columns={columns} productCount = {totalCount}  orderBy = {orderBy} totalproduct={totalproduct} />
                  </div>
                  </Disabled>
         </div>
     );
 }
 