/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';
 import { Panel, PanelBody, PanelRow,TextControl,Button,FocusableIframe,ResizableBox,RangeControl,ToolbarGroup,
    Flex, FlexBlock, FlexItem ,__experimentalText as Text, __experimentalGrid as Grid } from '@wordpress/components';
 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
 import { useBlockProps,RichText,InspectorControls,InnerBlocks,store as blockEditorStore } from '@wordpress/block-editor';
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

  //import { compose } from "redux";
  import { useFocusOnMount,useConstrainedTabbing,compose  } from '@wordpress/compose';

  import { withSelect, withDispatch } from "@wordpress/data";


 export function Edit({ attributes, setAttributes,context } ) {
    const blockProps = useBlockProps();

    const {
        height,
        width,
        columns,
      } = attributes;
      const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph' ];
      const MY_TEMPLATE = [
   //     [ 'core/image', {} ],
        [ 'core/columns', { placeholder: 'Add Column' } ],
      //  [ 'core/paragraph', { placeholder: 'Summary' } ],
       // [ 'core/columns', { placeholder: 'columns' } ],

    ];
    const onChangeColumns = (newColumns) => {
        setAttributes({ height: newColumns });
    };
     return (
         <div { ...blockProps }>
         {'The record ID: ' + context[ 'themehunk/column' ]}
            <InspectorControls key="setting" >
             <Panel header="title">
                <PanelBody title="title"  initialOpen={ true }>

                <RangeControl
                                label="Columns"
                                value={height}
                                onChange={(value) => onChangeColumns(value)}
                                min={1}
                                max={3}
                            />
                </PanelBody>
             </Panel>
             </InspectorControls>


             <Grid columns={ 4 }
             alignment="spaced"
             
             >
          
        </Grid>
        <ResizableBox
        className ="block-core-columns"
        size={ {
				height,
				width,
			} }
			minHeight="50"
			minWidth="50"
			enable={ {
				top: false,
				right: true,
				bottom: false,
				left: false,
				topRight: false,
				bottomRight: false,
				bottomLeft: false,
				topLeft: false,
			} }
			onResizeStop={ ( event, direction, elt, delta ) => {
				setAttributes( {
					height: parseInt( height + delta.height, 10 ),
					width: parseInt( width + delta.width, 10 ),
				} );
				//toggleSelection( true );
			} }
			onResizeStart={ () => {
				//toggleSelection( false );
			} }
        >
            <InnerBlocks
                    template={ MY_TEMPLATE }
                  //  renderAppender={ InnerBlocks.ButtonBlockAppender }
                    
                     />
                       </ResizableBox>

         </div>
     );
 }

 export default compose(
    withSelect((select, ownProps) => {
      // console.log("block column block class name inside select  ", ownProps);
      const { clientId } = ownProps;
      const { getBlockRootClientId, getBlock } = select(blockEditorStore);
      const rootId = clientId;
      let getRootBlock = getBlock(clientId);
    // console.log("getRootBlock from column select-> ", getRootBlock);

    //   // check column has children
       let currentColumnChildren = getBlock(clientId).innerBlocks.length;
       
      currentColumnChildren = currentColumnChildren ? true : false;
    //   // check column has children
       let rootBlockWrapperAttr = getRootBlock.attributes;
      let lengthInnerBlock = getRootBlock.innerBlocks.length;
      let WrapperColumns = rootBlockWrapperAttr.columns;
      console.log(WrapperColumns)

    //  let StyleColumn = rootBlockWrapperAttr.listStyle.columns;
      //let StyleColumnL = Object.keys(StyleColumn).length;
      if (
        lengthInnerBlock == WrapperColumns 
       
      ) {
        let getIndexOfColumn =
          getRootBlock.innerBlocks.findIndex(checkIndexOfcolumn); // current column client id
        let setCloneWidth = StyleColumn[getIndexOfColumn];
  
        //get index of currentColumn
        function checkIndexOfcolumn(columns) {
          return clientId == columns.clientId;
        }
        //get index of currentColumn
        return {
          cloneWidth: setCloneWidth,
          ul_column_index: getIndexOfColumn,
       //   ul_column_length: StyleColumnL - 1,
          ul_has_children: currentColumnChildren,
        };
      }
    }),
    withDispatch((dispatch, ownProps, registry) => {
      const { clientId, ul_column_index, ul_column_length } = ownProps;
      const { getBlockRootClientId, getBlock } =
       registry.select(blockEditorStore);
      const rootWrapperID = getBlockRootClientId(clientId);
     // const getRootBlock = getBlock(clientId);

      // ** current column change width
  
      /**
       * add more column
       */
      // console.log("getRootBlock from column dispatch-> ", getRootBlock);
      const blockName = "themehunk/column";
      const insertedBlock = wp.blocks.createBlock(blockName);
      const columnAddIndex = ul_column_index + 1;
      const addBlockNextBlock = () => {
        insertBlock(insertedBlock, columnAddIndex, rootWrapperID);
        let NowColumnCount = rootBlockWrapperAttr.columns + 1;
        // change column length
        updateBlockAttributes(rootWrapperID, {
          columns: NowColumnCount,
        });
      };
  
      return {
        //changeWidthColumn: changeWidthAndPlaceStyle,
        addBlockNextBlock: addBlockNextBlock
      };
    })
  )(Edit);

 