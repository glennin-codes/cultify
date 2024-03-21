import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Typewriter from 'typewriter-effect';
import { functionalStore } from '../../../../hooks/functionalStore';

export const Result= ()=>{
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
    const [typingStatus, setTypingStatus] = useState('Initializing');
 const {result,disease} =functionalStore();
 console.log(result?.title);

return(
    
   <div className='px-8 '>
    <h2 className='text-center colox'>
    <TypeAnimation
    className={CURSOR_CLASS_NAME}
    cursor={false}
  sequence={[
    // Same substring at the start will only be typed once, initially
    'predicted disease:',
    (el) => el?.classList.add(CURSOR_CLASS_NAME),
    100,
    `predicted disease:${disease}`,
    (el) => el?.classList.remove(CURSOR_CLASS_NAME),
    100,
    
    
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  
/>
<style >{`
    .colox{
        color:deepPink
    }
      .custom-type-animation-cursor::after {
        content: '|';
        animation: cursor 1.1s infinite step-start;
      }
      @keyframes cursor {
        50% {
          opacity: 0;
        }
      }
    `}</style>
    </h2>
 <div className='font-medium text-gray-700'>
 <TypeAnimation
  
  splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
  sequence={[
      () => {
          setTypingStatus('Typing...');
        },
   `${result?.content}`,
    
   () => {
      setTypingStatus('Done Typing');
    },
    
  ]}
  speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
  omitDeletionAnimation={true}
  style={{ fontSize: '1em',whiteSpace: 'pre-line', display: 'block', minHeight: '200px' }}
 
/>
 </div>
 <div>
 <div className='font-medium text-magenta cursor-pointer'

 >
 <TypeAnimation
  
  splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
  sequence={[
      () => {
          setTypingStatus('Typing...');
        },
   `${result?.title}`,
   100,
   `${result?.url}`,
   100,
    
   () => {
      setTypingStatus('Done Typing');
    },
    
  ]}
  speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
  omitDeletionAnimation={true}
  style={{ fontSize: '1em',whiteSpace: 'pre-line', display: 'block', minHeight: '200px' }}
 
/>
 </div>
 </div>

 


      <div className='mt-16 mb-16 font-normal  text-gray-700'>
       <p>
     TreatmentRecomendationStatus : <span className='font-medium text-magenta '> {typingStatus}</span>
       </p>

      </div>
   </div>
 
)

   
}