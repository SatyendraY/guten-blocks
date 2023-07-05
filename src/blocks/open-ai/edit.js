/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import apiFetch from '@wordpress/api-fetch';
 import { __ } from '@wordpress/i18n';
 import axios from 'axios'
 import { Button,Panel, PanelBody, PanelRow,TextareaControl,FocusableIframe,ResizableBox,RangeControl,ToolbarGroup  } from '@wordpress/components';
 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
 import { useBlockProps,RichText,InspectorControls } from '@wordpress/block-editor';
 import { useState,useEffect } from '@wordpress/element';

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


 export default function Edit({ attributes, setAttributes,isSelected  } ) {
    const {
        contentPrompts,
        aicontent,
        blockContent,
      } = attributes;


      const blockProps = useBlockProps();
      const [aidata, setAidata] = useState(aicontent);
      const [ailoader, setAiloader] = useState();

      const [completions, setCompletions] = useState(aicontent);

      const  NewlineText = (text)=> {
        const newText = text.split('\n').map(str => <>{str}<br/></>);
        
        return newText;
      }

  // 
  const handleGenerateCompletions = async () => {
    setAiloader(true);

    const prompt = 'Top ';
    const maxTokens = 5;
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
            model: "text-davinci-003",
            prompt: contentPrompts,
            max_tokens: 500,
            temperature: 0.8
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        }
      );
      setAiloader(false);

      console.log(response.data.choices[0].text);
      const newCompletions = NewlineText(response.data.choices[0].text);
      setCompletions(completions => [...completions, newCompletions]);
      setAttributes(  { aicontent: completions } );

     
      console.log(completions);

    } catch (error) {
      console.log(error);
    }
  };


  const handleGenerateChats = async () => {
    setAiloader(true);

    const prompt = 'Top ';
    const maxTokens = 5;
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: contentPrompts}],
            temperature: 0.8
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        }
      );
      setAiloader(false);


      const newCompletions = (response.data.choices[0].message.content)+completions;
    //  setCompletions(completions => [...completions, newCompletions]);
    setCompletions(newCompletions);
      setAttributes(  { aicontent: completions } );
      console.log(aicontent);

    } catch (error) {
      console.log(error);
    }
  };


// php code
       const Clickme = ( value ) => {
        setAiloader(true);
            // POST /wp/v2/posts
        async function getData() {
            const response = await apiFetch( {
                  path: '/wp/v2/guten-blocks/',
                  method: 'POST',
                  data: { aicontent: contentPrompts, },
              } ).then( ( res ) => {
                
                    setAidata(aidata+res.ai_generated);
                    setAttributes( { aicontent: aidata } )
                    setAiloader(false);
                  //  setAttributes( { aicontent: res.ai_generated } )
              } );
  
          }
          getData();
       };

     

       const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          // 👇 Get input value
          handleGenerateChats()
        }
      };


    const checkLoader = (ailoader) => {
        if(ailoader){
            return <img class='ai-loader' width='80px' src='http://localhost/wp572/wp-content/uploads/2023/03/loader.gif'/>;
        }
    }
    console.log('----------------------');
    console.log(aicontent);
    console.log( (completions));
    console.log('----------------------');


       return (
        <div { ...blockProps }>
             { isSelected && (<InspectorControls key="setting">
             <Panel header="Content AI">
                <PanelBody title="Auto Content Chat"  initialOpen={ true }>
                    <TextareaControl
                    label="Auto Content"
                    value={ contentPrompts }
                    onChange={ ( value ) => setAttributes(  { contentPrompts: value } ) }
                    onKeyDown={handleKeyDown}
                />
                <Button variant="secondary" onClick={handleGenerateChats}>Generate AI Content {checkLoader(ailoader)}</Button>
            </PanelBody>
             </Panel>
             </InspectorControls>)}
             {/* <RichText 
                tagName="p"
                value={ contentPrompts }
                allowedFormats={ [ 'core/bold', 'core/italic' ] }
                onChange={ ( val ) =>{
                            setAttributes( { contentPrompts: val } )}
                        }
                    /> */}
                    

                    
                   <RichText
                   tagName="p"
                value={completions} 
                allowedFormats={ [ 'core/bold', 'core/italic' ] }
                onChange={ ( val ) =>{
                            setAttributes( { aicontent: val } )
                            }
                        }
                    />
        
         </div> 
     );
 }
 