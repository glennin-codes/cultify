import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Typewriter from 'typewriter-effect';

export const Result= ()=>{
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
    const [typingStatus, setTypingStatus] = useState('Initializing');
 

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
    'predicted disease:Tomatoe mosaic',
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
   `Quick facts\nEarly blight is one of the most common tomato and potato diseases, occurring nearly every season in Minnesota.\nIt affects leaves, fruits and stems and can be severely yield-limiting when susceptible tomato cultivars are used and weather is favorable.\nSevere defoliation can occur.\u00a0 In tomatoes, fruit can be damaged by sun.\nTomato stem with brown lesions with concentric circles\nIdentification\nInitially, small dark spots form on older foliage near the ground. Leaf spots are round, brown and can grow up to 1/2 inch in diameter.\nLarger spots have target-like concentric rings. The tissue around spots often turns yellow.\nSeverely infected leaves turn brown and fall off, or dead, dried leaves may cling to the stem.\nSeedling stems are infected at or just above the soil line. The stem turns brown, sunken and dry (collar rot). If the infection girdles the stem, the seedling wilts and dies.\nStem infections on older plants are oval to irregular, dry brown areas with dark brown concentric rings.\nFruit can be infected at any stage of maturity.\nFruit spots are leathery and black, with raised concentric ridges. They generally occur near the stem. Infected fruit may drop from the plant.\nBiology\nEarly blight can be caused by two closely related species:\nAlternaria tomatophila\nand\nAlternaria solani\n.\nBoth pathogens can infect tomatoes, potatoes, peppers, and several weeds in the Solanaceae family including black nightshade (\nSolanum ptycanthum\n), and hairy nightshade (\nSolanum physalifolium\n)\nDisease develops at moderate to warm (59 to 80 F) temperatures; 82 to 86 F is its optimum temperature range\nThe pathogen is most likely to spread with any weather or heavy dew, or when relative humidity is 90% or greater\nThe early blight pathogens both overwinter in infected plant debris and soil in Minnesota. The pathogen also survives on tomato seed or may be introduced on tomato transplants.\nLower leaves become infected when they come into contact with contaminated soil, either through direct contact or when raindrops splash soil onto the leaves.\nSpores (reproductive structures) can germinate between 47\u00b0 and 90\u00b0 F and need free water or relative humidity of 90% or greater.\nSpores infect plants and form leaf spots as small as 1/8 inch diameter in as little as five days.\nSpores can be spread throughout a field by wind, human contact or equipment, resulting in many reinfection opportunities throughout a growing season.\nEarly blight infection starts at the bottom of the plant with leaf spotting and yellowing.\nEarly blight lesions with brown concentric rings\nEarly blight lesions on potato\nManaging early blight in the home garden\nOpen all\n|\nClose all\nPlus sign (+) if content is closed, 'X' if content is open.\nResistant varieties\nEarly blight-resistant varieties are readily available.\u00a0 As early blight occurs commonly in Minnesota, gardeners should look into these varieties.\nResistance does not mean you will not see any early blight; rather, resistant varieties can better tolerate the pathogens, and so the damage will be less severe than with non-resistant varieties.\nCornell University\nkeeps track of varieties sold as having disease resistance\n. You can often find this information in seed catalogs.\nPlus sign (+) if content is closed, 'X' if content is open.\nCultural controls\nCover the soil under the plants with mulch, such as fabric, straw, plastic mulch, or dried leaves.\nWater at the base of each plant, using drip irrigation, a soaker hose, or careful hand watering.\nIncrease airflow by staking or trellising, removing weeds, and spacing plants adequately apart\nPruning the bottom leaves can also prevent early blight spores from splashing up from the soil onto leaves.\nLet two years pass before you plant tomatoes or peppers in the same location\nPlus sign (+) if content is closed, 'X' if content is open.\nPhysical controls\nRemove leaves with leaf spots and bury or burn them. You may opt to bury them in your home compost pile if you maintain your compost pile according to\nComposting in home gardens\n.\nIf you touch infected leaves, wash your hands well before working in healthy tomato plants. If you use pruning tools, wash and sanitize them after touching infected plants.\nIt is okay to remove up to one third of the plant's leaves if you catch the disease early. Do not remove more than one third of the plant's leaves.\nKeep leaves dry to reduce spreading the disease.\nPlus sign (+) if content is closed, 'X' if content is open.\nFungicides\nMost home gardeners don\u2019t need to treat tomatoes with a fungicide. Tomato plants can tolerate a lot of early blight without reducing the number of tomatoes they produce.\nManaging early blight on farms\nOpen all\n|\nClose all\nPlus sign (+) if content is closed, 'X' if content is open.\nMonitoring\nEarly blight typically appears in Minnesota in mid to late June.\u00a0 The exact timing varies from year to year, so scout regularly in order to begin managing the disease as soon as it appears.\nPlus sign (+) if content is closed, 'X' if content is open.\nResistant cultivars\nThere are many resistant tomato cultivars available, often designated with an \"EB\" in seed catalogs.\nThere is an extensive list of resistant cultivars on\nCornell University's vegetable pathology website\n.\nResistant varieties are not immune to early blight. However, infection will be less severe on either the leaves, stem or both.\nPlus sign (+) if content is closed, 'X' if content is open.\nCultural controls\nUse pathogen-free seed, or collect seed only from disease-free plants.\nRotate out of tomatoes and related crops for at least two years.\nControl susceptible weeds such as black nightshade and hairy nightshade, and volunteer tomato plants throughout the rotation.\nFertilize properly to maintain vigorous plant growth. Do not over-fertilize with potassium and maintain adequate levels of both nitrogen and phosphorus.\nAvoid working in plants when they are wet from rain, irrigation, or dew. Use drip irrigation instead of overhead irrigation to keep foliage dry.\nStake or trellis and prune the plants to increase airflow around the plant and facilitate drying. Staking will also reduce contact between the leaves and spore-contaminated soil.\nCarefully prune infected leaves, take care to wash and sanitize tools as you prune, and dispose of infected leaves far away from your tomato production areas.\nApply plastic or organic mulch to provide a barrier between contaminated soil and leaves.\nIn the fall, remove or bury infected plants to reduce the likelihood of the pathogen surviving into the following year.\nFor greenhouse production, early blight has been reduced by as much as 50% by covering houses with UV-absorbing vinyl film.\nPlus sign (+) if content is closed, 'X' if content is open.\nFungicides\nApplications should be made when environmental conditions favor disease to be the most effective and repeated according to label instructions. Once the pathogen appears, keep track of forecasts and plan applications accordingly.\nIt is important to alternate between different chemical families to avoid the development of pathogen insensitivity to particular active ingredients. Some insensitivity to the chemical family 11 has become more common in some areas, so particular care should be taken to rotate these with other chemical families. Also, if insensitivity is already present in a given field population of early blight, fungicides in chemical family 11 will not provide good control.\nSee the\nMidwest Vegetable Production Guide\nfor current recommendations.\nCAUTION:\nMention of a pesticide or use of a pesticide label is for educational purposes only. Always follow the pesticide label directions attached to the pesticide container you are using. Be sure that the plant you wish to treat is listed on the label of the pesticide you intend to use. And observe the number of days between pesticide application and when you can harvest your crop.\u00a0Remember, the label is the law.\nMarissa Schuh, horticulture IPM Extension educator, and Michelle Grabowski\nReviewed by Natalie Hoidal, Extension educator\nReviewed in\n      2023`,
    
   () => {
      setTypingStatus('Done Typing');
    },
    
  ]}
  speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
  omitDeletionAnimation={true}
  style={{ fontSize: '1em',whiteSpace: 'pre-line', display: 'block', minHeight: '200px' }}
 
/>
 </div>
      <div className='mb-24 font-normal  text-gray-700'>
       <p>
     TreatmentRecomendationStatus : <span className='font-medium text-magenta '> {typingStatus}</span>
       </p>

      </div>
   </div>
 
)

   
}