import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Typewriter from "typewriter-effect";
import { functionalStore } from "../../../../hooks/functionalStore";
import Modal from "../../../../components/modal/LogoutModal";
import {MDXProvider} from '@mdx-js/react';
import TomatoBacterialSpot from "../../../../Docs/TomatoBacterialSpot.mdx";
import TomatoEarlyBlight from "../../../../Docs/TomatoEarlyBlight.mdx";
import TomatoHealthy from "../../../../Docs/TomatoHealthy.mdx";
import TomatoLateBlight from "../../../../Docs/TomatoLateBlight.mdx";
import TomatoLeafMold from "../../../../Docs/TomatoLeafMold.mdx";
import TomatoSeptoriaLeafSpot from "../../../../Docs/TomatoSeptoriaLeafSpot.mdx";
import TomatoSpiderMitesTwoSpottedmite from "../../../../Docs/TomatoSpiderMitesTwoSpottedmite.mdx";
import TomatoTargetSpot from "../../../../Docs/TomatoTargetSpot.mdx";
import TomatotomatoMosaicVirus from "../../../../Docs/TomatotomatoMosaicVirus.mdx";
import TomatotomatoYellowLeafCurlVirus from "../../../../Docs/TomatotomatoYellowLeafCurlVirus.mdx";
import { normalizeDiseaseName } from "../../../../helpers/NormaliseDeseaseNames";


const diseaseComponents = {
  TomatoBacterialSpot,
  TomatoEarlyBlight,
TomatoHealthy,
TomatoLateBlight,
TomatoLeafMold,
TomatoSeptoriaLeafSpot,
TomatoSpiderMitesTwoSpottedmite,
TomatoTargetSpot,
TomatotomatoMosaicVirus,
TomatotomatoYellowLeafCurlVirus,
 
};
export const Result = () => {
  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";
  const [typingStatus, setTypingStatus] = useState("Initializing");
  const [modalOpen, setModalOpen] = useState(false);

  const {  disease } = functionalStore();
 


  const openModal = () => {
    setModalOpen(true);
  };

  useEffect(()=>{
    if(!disease){
      setModalOpen(true);
    }
  },[])

  const closeModal = () => {
    setModalOpen(false);
  };
  const normalizedDiseaseName = normalizeDiseaseName(disease);
  const DiseaseComponent = normalizedDiseaseName ? diseaseComponents[normalizedDiseaseName] : null;

  return (
    <div className="px-8 display flex flex-col gap-4 ">
      <h2 className="text-center colox">
        <TypeAnimation
          className={CURSOR_CLASS_NAME}
          cursor={false}
          sequence={[
            // Same substring at the start will only be typed once, initially
            "predicted disease:",
            (el) => el?.classList.add(CURSOR_CLASS_NAME),
            100,
            `predicted disease:${
              disease ? disease : "Nothing found yet,please predict"
            }`,
            (el) => el?.classList.remove(CURSOR_CLASS_NAME),
            100,
          ]}
          speed={50}
          style={{ fontSize: "2em" }}
        />
        <style>{`
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
      <div className="prose prose-img:rounded-xl prose-headings:text-green-900 prose-a:text-blue-600 hover:prose-a:text-blue-500 max-w-none font-medium text-gray-800 border border-green-300 border-l-8 rounded-md py-2 px-6">
      <MDXProvider 
      >
     {DiseaseComponent ? <DiseaseComponent /> : <p className=" prose-xl m-20 text-center">!! Result information not available.  !!</p>}
  </MDXProvider>
      </div>
    

    
       
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          message="Something went wrong. Please try again. "
        />
    
    </div>
  );
};
