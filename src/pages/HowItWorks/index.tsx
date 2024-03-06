import { Link } from "react-router-dom";

export const HowItworks = () => {
  return (
    <div id="how-it-works" className="mt-20 py-8 mb-12 flex flex-col align-center justify-center items-center md:px-6 px-6 w-full">
      <h1 className="text-greenMain text-center text-2xl font-bold md:text-3xl mb-12">
        How It Works
      </h1>
      <div className="flex flex-col md:flex-row w-full md:space-x-12 md:space-y-0 space-y-4  ">
        <div className="md:w-1/2 w-full">
          <img
            src="images/how.jpeg"
            className="w-full md:h-96 h-3/4 object-cover rounded-lg "
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:leading-10  leading-7   ">
          <p className=' text-typographyGray-400'>
            <span className="text-blackSubtitles-500 font-bold ">Capture:</span> Snap a photo of your plant to predict diseases with our
            advanced machine learning platform.
          </p>
          <p className=' text-typographyGray-400'>
          <span className="text-blackSubtitles-500 font-bold ">Diagnose:</span>Receive instant disease diagnosis and access treatment
            recommendations.
          </p>
          <p className=' text-typographyGray-400'>
          <span className="text-blackSubtitles-500 font-bold ">Connect:</span> Find nearby agrovet services for quick and effective
            treatment of disease.
          </p>
          <p className=' text-typographyGray-400'>
          <span className="text-blackSubtitles-500 font-bold ">Monitor:</span> Stay informed with real-time statistics on trending plant
            diseases in your area.
          </p>
          <p className=' text-typographyGray-400'>
          <span className="text-blackSubtitles-500 font-bold ">Alert:</span> Receive timely notifications about potential disease
            outbreaks in your region.
          </p>
          <p className=' text-typographyGray-400 mb-4'>Experience the future of plant care – join us today!</p>
          <div className=" ">
            <Link
              to="/signup" 
              className=" px-6 py-3 text-white bg-greenMain rounded-full baseline hover:bg-darkGreen"
            > 
              Get Started
            </Link>
          </div>
        </div>
       
      </div>
      <div className="mt-16 bg-gray-300 flex justify-between items-center px-4 py-6 font-medium">
    <p className="w-1/2 text-lg ml-4">
        WHAT ARE YOU WAITING FOR? SIGN UP NOW AND REVOLUTIONIZE THE FARMING INDUSTRY WITH ADVANCED AI TECHNOLOGY
    </p>
    <a href="/signup" className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-green-600 transition duration-300">Get Started</a>
</div>
    </div>
  );
};
