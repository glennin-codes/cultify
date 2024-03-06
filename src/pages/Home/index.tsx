import { ReactNode } from "react";
import { HereosSection } from "../../components/Sections/heroes"

import { title } from "../../constants"
import { WhyChoseUs } from "../../components/whyChoseUs"


export const Home=(): ReactNode=>{

    return(
       <div className="mt-32">
        <HereosSection title={title}/>
         {/* <HowItworks/> */}
       
         <WhyChoseUs/>
         {/* <AboutUs/>  */}
      
      
       
       </div>
    )
}