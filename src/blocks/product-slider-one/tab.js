import { useState,useEffect } from '@wordpress/element';

import { TabPanel,VisuallyHidden   } from '@wordpress/components';
import { Icon, cog,styles } from '@wordpress/icons';

const EditorTab = (props) =>{

   //     [tabActive,setTabActive] = useState('setting');

    console.log(props);

    console.log('type',props.children[0].type);



    const onSelect = ( tabid ) => {
        console.log( 'Selecting tab', tabid );

        return tabid;
    };


    const tabPanels = (tabContent,key) => {
                console.log(tabContent);
                console.log(key);

        return (<TabPanel key={key}
            activeClass="is-active"
            onSelect={ onSelect }
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
            { ( tab ) =><p>{tabContent}</p>  }
            </TabPanel>);

    }


        const tabFilter = () =>{

            //  props.children.map((vtab,i) => {  
            //     if(vtab.key === 'settings'){
            //     return(tabPanels(vtab.props.children,vtab.key));

            //     }
            //     // <p key={i}>{console.log(vtab)}</p>
            // });


                if(props.children[0].key === 'settings'){
                    return(tabPanels(props.children[0].props.children,1));
                }else if(props.children[1].key === 'styles'){

                    return(tabPanels(props.children[1].props.children,1));


                }

            //     <VisuallyHidden>

                    
            //     </VisuallyHidden>

            // return(<p>{props.children[0].key}

                
             
            // </p>
            // );
        } 



    return(tabFilter());
   
}

export default EditorTab;