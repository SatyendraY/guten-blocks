import axios from 'axios';
import { useState,useEffect } from '@wordpress/element';
import { Button } from '@wordpress/components';


export default function openAIApi({ attributes, setAttributes,isSelected  } ) {
    const [completions, setCompletions] = useState([completions => [...completions]]);

    const  NewlineText = (text)=> {
      const newText = text.split('\n').map(str => <>{str}<br/></>);
      
      return newText;
    }

    const handleGenerateChats = async () => {
       // setAiloader(true);
    
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
        //  setAiloader(false);
    
          console.log(response.data.choices[0].message.content);
    
          const newCompletions = NewlineText(response.data.choices[0].message.content);
          setCompletions(completions => [...completions, newCompletions]);
        //  setAttributes(  { aicontent: completions } );
          console.log(completions);
    
        } catch (error) {
          console.log(error);
        }
      };

      return handleGenerateChats;
}
