import { useState,useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody,TabPanel,TextControl,Button,ColorIndicator,FlexItem,
    ColorPalette, Popover,Dropdown,GradientPicker,
     } from '@wordpress/components';
    import {
        __experimentalHStack as HStack,
        __experimentalText as Text,
    } from '@wordpress/components';
    import { useSelect } from '@wordpress/data';
const ColorPanel = (props) =>{

  
    // Retrieve the themes color settings from the block editors' data
    const blockEditor = useSelect('core/block-editor').getSettings();

    const [ popoverAnchor, setPopoverAnchor ] = useState();
    const [ gradient, setGradient ] = useState( null );
    const [ color, setColor ] = useState( null );
    const [ activeTab, setActiveTab ] = useState('color');
    const [ attr, setAttr ] = useState( null );

    const [ colorTabActive, setcolorTabActive ] = useState( [
      {
        name: 'color',
        title: 'Color',
        className: 'tab1',

      }
    ] );
    const [ isVisible, setIsVisible ] = useState( false );

    const textColors = [
      {
        colors:[
          {
            "name": "Black",
            "slug": "black",
            "color": "#000000"
          },
          {
            "name": "Cyan bluish gray",
            "slug": "cyan-bluish-gray",
            "color": "#abb8c3"
          },
          {
            "name": "White",
            "slug": "white",
            "color": "#ffffff"
          },
          {
            "name": "Pale pink",
            "slug": "pale-pink",
            "color": "#f78da7"
          },
          {
            "name": "Vivid red",
            "slug": "vivid-red",
            "color": "#cf2e2e"
          },
          {
            "name": "Luminous vivid orange",
            "slug": "luminous-vivid-orange",
            "color": "#ff6900"
          },
          {
            "name": "Luminous vivid amber",
            "slug": "luminous-vivid-amber",
            "color": "#fcb900"
          },
          {
            "name": "Light green cyan",
            "slug": "light-green-cyan",
            "color": "#7bdcb5"
          },
          {
            "name": "Vivid green cyan",
            "slug": "vivid-green-cyan",
            "color": "#00d084"
          },
          {
            "name": "Pale cyan blue",
            "slug": "pale-cyan-blue",
            "color": "#8ed1fc"
          },
          {
            "name": "Vivid cyan blue",
            "slug": "vivid-cyan-blue",
            "color": "#0693e3"
          },
          {
            "name": "Vivid purple",
            "slug": "vivid-purple",
            "color": "#9b51e0"
          }
        ],
        name: 'DEFAULT'
      },
      {
        colors: blockEditor.colors,
        name: 'THEME COLORS'
      }
    ];



    const textColorsCustom = [
        { name: 'red', color: '#f00' },
        { name: 'blck', color: '#000' },
        { name: 'blue', color: '#00f' },
    ]; 

    const bgColors = [
      { name: 'red', color: '#f00' },
      { name: 'blck', color: '#000' },
      { name: 'blue', color: '#00f' },
  ]; 
  
  //blockEditor.gradients
    const gradientColor =[
      {
        gradients: [
          {
            "name": "Vivid cyan blue to vivid purple",
            "gradient": "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
            "slug": "vivid-cyan-blue-to-vivid-purple"
          },
          {
            "name": "Light green cyan to vivid green cyan",
            "gradient": "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
            "slug": "light-green-cyan-to-vivid-green-cyan"
          },
          {
            "name": "Luminous vivid amber to luminous vivid orange",
            "gradient": "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
            "slug": "luminous-vivid-amber-to-luminous-vivid-orange"
          },
          {
            "name": "Luminous vivid orange to vivid red",
            "gradient": "linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
            "slug": "luminous-vivid-orange-to-vivid-red"
          },
          {
            "name": "Very light gray to cyan bluish gray",
            "gradient": "linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",
            "slug": "very-light-gray-to-cyan-bluish-gray"
          },
          {
            "name": "Cool to warm spectrum",
            "gradient": "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
            "slug": "cool-to-warm-spectrum"
          },
          {
            "name": "Blush light purple",
            "gradient": "linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%)",
            "slug": "blush-light-purple"
          },
          {
            "name": "Blush bordeaux",
            "gradient": "linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%)",
            "slug": "blush-bordeaux"
          },
          {
            "name": "Luminous dusk",
            "gradient": "linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%)",
            "slug": "luminous-dusk"
          },
          {
            "name": "Pale ocean",
            "gradient": "linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%)",
            "slug": "pale-ocean"
          },
          {
            "name": "Electric grass",
            "gradient": "linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%)",
            "slug": "electric-grass"
          },
          {
            "name": "Midnight",
            "gradient": "linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)",
            "slug": "midnight"
          }
        ],
        name: 'DEFAULT'
      },
      {
        gradients: blockEditor.gradients,
        name: 'THEME COLOR'
      }
    ];
    


        useEffect(() => {
           // isHexColor(props.colorCode);

        });
        const isHexColor = (str)=>{
              console.log('str',str);
                let haxColor =  /^#([0-9A-F]{3}){1,2}$/i.test(str);
                let gradient =  /^linear-gradient/.test(str);

                if (haxColor) {
                  console.log('haxColor',haxColor)
                    setColor(str);
                    setActiveTab('color');
                  
                  }else if(gradient){
                    setGradient(str);
                    setActiveTab('gradient');
                  }
          }

          const handleActiveColorTab = (activeColorTab)=>{
            console.log('activeColorTab',activeColorTab);
                  let colortab =   {
                    name: 'color',
                    title: 'Color',
                    className: 'tab1',
            
                  }
                  let gradientTab =   {
                    name: 'gradient',
                    title: 'Gradient',
                    className: 'tab2',
                  }

              if(activeColorTab.includes('gradient')){
                setcolorTabActive( [colortab,gradientTab] );
              }else{
                setcolorTabActive ([colortab])
              }
          }


        const toggleVisible =  (colorCode,attrid,activeColorTab) => {

          handleActiveColorTab(activeColorTab);
//           if (activeColorTab.has("color")) {
//             //get Value of video
// alert(true);
//         }

          if((attrid ===attr && isVisible === false) || (attrid !=attr && isVisible === false)){
              setIsVisible(true);
              console.log('1');

            }else if(attrid ===attr && isVisible === true){
              setIsVisible(false);
              console.log('2');

            }else if(attrid !=attr && isVisible === true){
            console.log('3');
              setIsVisible(false);
               setTimeout(function () {setIsVisible(true)});
            }
            
            // else{
            //   console.log('state');

            //   setIsVisible((state) => !state);
            // }

          isHexColor(colorCode);
          setAttr(attrid);

      };

       const handleChange = (val)=>{
        var blockAttr = {};
            setGradient(val);
            blockAttr[attr] = val;
            props.handelColorPanel(blockAttr);
        }

        const handleClick = (val)=>{
            var blockAttr = {};
            setColor(val);
            blockAttr[attr] = val;
            props.handelColorPanel(blockAttr);
        }

      const panelColors = ( tabName ) => {
        if(tabName==='gradient') {
            return  (<GradientPicker
            __nextHasNoMargin
            value={ gradient }
            onChange={ handleChange}
            gradients={gradientColor}
            />);
        } else if(tabName==='color'){
          return (<ColorPalette
              colors={ textColors }
              value={color}
              onChange={handleClick }
          />);
        }
    };


const onFocusOutsideClick = (event) =>{
  setIsVisible(false);
}
const colorButton = () => {
 let colorData = props.colorTool;

return (<div className='ubp-color-container'>
<div class="color-block-support-panel__inner-wrapper">

<div className='components-tools-panel-item block-editor-tools-panel-color-gradient-settings__item first'>


    {colorData.map((data,i) => {  
      return(<div class="components-dropdown block-editor-tools-panel-color-gradient-settings__dropdown" tabindex="-1">
      <Button key={i} ref={ setPopoverAnchor }  onClick={ ()=>toggleVisible(data.value,data.attribute,data.active) } className={`block-editor-panel-color-gradient-settings__dropdown ${attr === data.attribute && 'is-open'}`} >
        <HStack alignment="left">
            <ColorIndicator className="block-editor-panel-color-gradient-settings__color-indicator" colorValue={ data.value} />
            <FlexItem>{ data.name} </FlexItem>
        </HStack>
</Button></div>);
      })}

</div>
 

</div>
  { isVisible && <Popover placement="left-start"
        onFocusOutside = {onFocusOutsideClick}
    anchor={ popoverAnchor }
    onClose={ () => setIsVisible( false ) }
    offset={35}
  >
    <fieldset> 
    <TabPanel
    className="ubp-tab-panel"
    activeClass="is-active"
    initialTabName={activeTab}
    tabs={colorTabActive}
  >
    { ( tab ) => <div className='ubp-color-component'>{panelColors(tab.name)} </div> }
  </TabPanel>
  
</fieldset></Popover> }  
</div>);

}
return colorButton();

}

export default ColorPanel;