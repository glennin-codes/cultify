import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
interface Props{
    isOpen:boolean,
    onClose:()=>void,
    message:string
}
const Modal = ({ isOpen, onClose, message }:Props) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="fixed bg-white p-8  rounded-md shadow-md">
            <div className="text-red-500 text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto mb-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.477 0 10c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zm0 18.75A8.75 8.75 0 1110 1.25v17.5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v6a1 1 0 11-2 0V6a1 1 0 011-1zm0 10a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg flex flex-row gap-2 items-center"><span><AiOutlineInfoCircle size={32} color="red" /></span>{message}</p>
            </div>
            <button
              className="block mx-auto px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
