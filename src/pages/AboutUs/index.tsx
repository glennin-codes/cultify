import { Link, useLocation } from "react-router-dom";
import { aboutUs } from "../../constants";

export const AboutUs=()=>{

  
    return(
       <div className=" font-Monsterrat h-full w-full flex flex-col justify-center items-center  mt-20  md:px-12 px-4 py-8">
    <section
    className="justify-center flex flex-col items-center text-gray-500  "
    >
        <h1 className="md2:text-3xl text-2xl  font-bold text-center text-greenMain  ">About Us</h1>
           <h4 className="md:font-medium text-center">
              Our commitment is to revolutionizing the Ai
             farming industry with Ai.
           </h4> 
        </section>
       {/* our mission */}
        <div className="w-full md:mt-24 mt-4 flex flex-col  justify-center items-center gap-12 mb-6 px-4">
            <section className="w-full flex justify-center items-center   md2:flex-row flex-col ">
                <div className="flex flex-col justify-center items-center md2:w-1/2 w-full gap-3">
                    <h2 className="md2:text-3xl flex flex-start text-2xl font-semibold text-gray-500 "> Our Mission</h2>
                <p className="font-Monsterrat   text-darkGrayishBlue-500 md:w-2/3 w-full font-normal">Our mission is to empower farmers with advanced AI
                    technology to predict, prevent, and manage tomato diseases effectively. We strive to provide
                    accessible and actionable insights to farmers, enabling them to safeguard their crops and enhance
                    agricultural productivity
                    
                </p>
                    <p className="text-black-900 md:w-2/3 font-normal">Our ultimate goal is to safeguard global food security, enhance crop yield, and promote sustainable agricultural practices. We strive to be a trusted partner for farmers, researchers, and stakeholders in combating plant diseases and fostering resilient farming communities worldwide.</p>
              </div>
                    <div className=" flex flex-col justify-center items-center md:w-1/2 w-full  md:mt-0 mt-6">
                    <img src="images/a.jpg" alt="image" className="md:h-[350px] h-[250px] md:w-2/3 w-full rounded"/>

                 </div>
        
            </section>
              {/* our visiion */}
              <section className="w-full flex justify-center items-center   md:flex-row-reverse  flex-col  gap-4 ">
                <div className="flex flex-col justify-center items-center md2:w-1/2  w-full gap-3 ">
                    <h2 className="md2:text-3xl   text-2xl font-semibold text-gray-500 "> Our Vission</h2>
                <p className="text-black-900 md:w-2/3 w-full font-normal">Our vision is a future where tomato farming is
                    sustainable, resilient, and prosperous. We envision a world where farmers have the knowledge and
                    tools to mitigate disease risks, optimize resource utilization, and ensure food security for
                    generations to come.</p>
                    <p className="text-black-900 md:w-2/3 w-full font-normal">Our vision is a future where tomato farming is
                    sustainable, resilient, and prosperous. We envision a world where farmers have the knowledge and
                    tools to mitigate disease risks, optimize resource utilization, and ensure food security for
                    generations to come.</p>
                    </div>
                 <div className="md2:w-1/2 flex justify-center items-center  items-center ">
                    <img src="images/b.jpg" alt="image" className="md:h-[350px] h-[250px] md:w-2/3 w-full rounded"/>

                 </div>
        
            </section>
            <section className="w-full flex justify-center items-center    md:flex-row  flex-col ">
                <div className="flex flex-col justify-center items-center  md2:w-1/2 gap-3">
                    <h2 className="md2:text-3xl  text-2xl font-semibold text-gray-500 "> Our Approach</h2>
                <p className="text-black-900 md:w-2/3 w-full font-normal">Our Aproach is to empower farmers with advanced AI
                    technology to predict, prevent, and manage tomato diseases effectively. We strive to provide
                    accessible and actionable insights to farmers, enabling them to safeguard their crops and enhance
                    agricultural productivity</p>
                    <p className="text-black-900 md:w-2/3  w-full font-normal">We leverage cutting-edge AI algorithms and data
                    analytics to analyze historical and real-time data on weather patterns, soil conditions, and
                    disease outbreaks. By combining scientific expertise with technological innovation, we provide
                    farmers with personalized recommendations and insights tailored to their specific farming
                    conditions and challenges.</p>
                    </div>
                 <div className="md:w-1/2 flex justify-center items-center   w-full md:mt-0 mt-6   ">
                    <img src="images/c.jpg" alt="image" className="md:h-[350px] h-[250px] md:w-2/3 w-full rounded"/>

                 </div>
        
            </section>

        </div>
        <div className="mt-8 w-full bg-gray-300 flex md:justify-between  justify-center items-center px-4 py-6 font-medium">
    <p className=" hidden  w-1/2 text-lg ml-4 md:block">
        WHAT ARE YOU WAITING FOR? SIGN UP NOW AND REVOLUTIONIZE THE FARMING INDUSTRY WITH ADVANCED AI TECHNOLOGY
    </p>
    <a href="/signup" className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-green-600 transition duration-300">Get Started</a>
</div>

       </div>
    )
}