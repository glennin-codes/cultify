import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Typewriter from 'typewriter-effect';
import { functionalStore } from '../../../../hooks/functionalStore';

export const Result= ()=>{
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
    const [typingStatus, setTypingStatus] = useState('Initializing');
 const {result,disease} =functionalStore();
 console.log(result?.title);

 const link = document.getElementById('link-to');
 if (result?.url) {
  link?.classList.remove('disabled');
  
 } else {
  link?.classList.add('disabled');
 }
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
    `predicted disease:${disease? disease : "Nothing found yet,please predict"}`,
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
   `${result?.content ? result?.content :"You have not uploaded any image for a detection please do so then navigate to this page" }`,
    
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
  <a id='link-to' href={result?.title}  className="inline-block bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded-lg
                  transition duration-300 ease-in-out transform hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50
                  active:bg-blue-800" target="_blank" rel="noopener noreferrer">

  
 <TypeAnimation
  
  splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
  sequence={[
      () => {
          setTypingStatus('Typing...');
        },
   `${result?.title ? result?.title :"You have not uploaded any image for a detection please do so then navigate to this page"}`,
   100,
   `${result?.url ?"View on the web  for more information about treatment":"You have not uploaded any image for a detection please do so then navigate to this page"}`,
   100,
    
   () => {
      setTypingStatus('Done Typing');
    },
    
  ]}
  speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
  omitDeletionAnimation={true}
  style={{ fontSize: '1em',whiteSpace: 'pre-line', display: 'block', minHeight: '200px' }}
 
/>
<style >{`
  .disabled{
    color: gray; 
    pointer-events: none; 
    cursor: not-allowed;
    text-decoration: none; 
    opacity:0.5
  }
    `}</style>
</a>
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