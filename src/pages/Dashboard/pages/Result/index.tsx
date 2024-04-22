import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Typewriter from "typewriter-effect";
import { functionalStore } from "../../../../hooks/functionalStore";
import Modal from "../../../../components/modal/LogoutModal";

export const Result = () => {
  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";
  const [typingStatus, setTypingStatus] = useState("Initializing");
  const [modalOpen, setModalOpen] = useState(false);

  const { result, disease } = functionalStore();
  console.log(result?.title);

  const link = document.getElementById("link-to");
  if (result?.url) {
    link?.classList.remove("disabled");

  } else {
    link?.classList.add("disabled");
    
  }

  const openModal = () => {
    setModalOpen(true);
  };
  console.log(result)
  useEffect(()=>{
    if(!result?.content){
      setModalOpen(true);
    }
  },[])

  const closeModal = () => {
    setModalOpen(false);
  };

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
      <div className="font-medium text-gray-800 border border-green-300 border-l-8 rounded-md py-2 px-6">
        <TypeAnimation
          className={CURSOR_CLASS_NAME}
          splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
          sequence={[
            () => {
              setTypingStatus("Typing...");
            },
            `${
              result?.content
                ? result?.content + " " + " Link below this result box ."
                : "You have not uploaded any image for a detection please do so then navigate to this page"
            }`,

            (el) => {
              setTypingStatus("Done Typing");
              el?.classList.remove(CURSOR_CLASS_NAME);
            },
            10,
          ]}
          speed={{ type: "keyStrokeDelayInMs", value: 30 }}
          omitDeletionAnimation={true}
          style={{
            fontSize: "1em",
            whiteSpace: "pre-line",
            display: "block",
            minHeight: "200px",
          }}
        />
        <style>{`
  
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
      </div>
      <div>
        <div className="font-medium text-magenta cursor-pointer py-0 m-0 p-0">
          <a
            id="link-to"
            href={result?.url}
            className="disabled inline-block  font-bold border-right border border-red rounded-lg
                  transition duration-300 ease-in-out transform hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50
                  active:  py-0 m-0 p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TypeAnimation
            className={CURSOR_CLASS_NAME}
              splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
              sequence={[
                (el) => {
                  setTypingStatus("Typing...");
                  el?.classList.add(CURSOR_CLASS_NAME);
                },
                `${
                  result?.title
                    ? result?.title
                    : "You have not uploaded any image for a detection please do so then navigate to this page"
                }`,
                100,
                `${
                  result?.url
                    ? "View on the web  for more information about treatment"
                    : "You have not uploaded any image for a detection please do so then navigate to this page"
                }`,
                (el) => {
                 
                  el?.classList.remove(CURSOR_CLASS_NAME);
                },
                100,

                
              ]}
              speed={{ type: "keyStrokeDelayInMs", value: 30 }}
              omitDeletionAnimation={true}
              style={{
                fontSize: "1em",
                whiteSpace: "pre-line",
                display: "block",
              }}
            />
            <style>{`
  .disabled{
    color: red; 
    pointer-events: none; 
    cursor: not-allowed;
    text-decoration: none; 
    opacity:0.5
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
          </a>
        </div>
      </div>

      <div className="mt-16 mb-16 font-normal  text-gray-700">
        <p>
          TreatmentRecomendationStatus :{" "}
          <span className="font-medium text-magenta "> {typingStatus}</span>
        </p>
       
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          message="Something went wrong. Please try again. "
        />
      </div>
    </div>
  );
};
