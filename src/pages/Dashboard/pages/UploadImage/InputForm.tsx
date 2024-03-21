import React, { useEffect, useState } from "react";
import { FaTimes, FaTruckLoading, FaUpload } from "react-icons/fa";
import SmallCard from "./SmallCard";
import { functionalStore } from "../../../../hooks/functionalStore";
import { useNavigate } from "react-router-dom";
import { Alert } from "@material-tailwind/react";
import { BiLoaderAlt } from "react-icons/bi";
function InputForm() {
  const [image, setImage] = useState<File | null>(null);
  const [objectURL, setObjectURL] = useState<string | null>(null); // State to store the object URL
const {upload,isLoading,error,success}=functionalStore()
const navigate=useNavigate();
  function handleUploadFile(e: React.ChangeEvent<HTMLInputElement>): void {
    const file = e.target.files && e.target.files[0];
    console.log({ file });
    console.log({ objectURL });
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setObjectURL(objectURL);
      setImage(file);
    }
  }

  // Function to revoke object URL
  function revokeObjectURL(): void {
    if (objectURL) {
      setImage(null);
      setObjectURL(null);
      // Clear the object URL from state
    }
  }
  function handleCancel(): void {
    // Clear the image and object URL when cancel button is clicked
    revokeObjectURL();
  }
  const handleUpload = async () => {
    const id=localStorage.getItem('id');
    console.log("clicked")
    if(id && image){
      const formData=new FormData();
    
    formData.append('file', image);
     await upload({formData,id})  
    }else{
      return 0
    }

  };


  return (
    <div className="  w-full h-[calc(100vh-2rem)] py-6 px-8 font-Poppins">
      <div className="w-full h-full  md:-3/4 flex md:flex-row  md:mb-0 mb-4 flex-col-reverse gap-4 ">
        <div className="flex md:w-1/2 w-full  flex-col gap-4 h-full ">
          <div className="w-full  h-3/4  justify-center items-center border-2 border-dashed border-gray-300 rounded-md ">
            <label className="flex h-full flex-col cursor-pointer  hover:text-green-500 justify-center items-center text-gray-500 ">
              <FaUpload className="h-12 w-12" />
              <input
                type="file"
                onChange={handleUploadFile}
                className="hidden"
              />
              <div className="text-center flex flex-col ">
                Drag and drop an image here or{" "}
                <span className=" cursor-pointer  text-blue-400 hover:text-green-500">
                  browse
                </span>
              </div>
            </label>
          </div>
          {objectURL && (
            <div className="relative w-full">
              <img
                src={objectURL}
                className="md:h-[100px] h-[80px]  w-full  hover:scale-[1.05] object-cover  rounded-lg"
                alt="image"
              />
              <button
                onClick={handleCancel}
                className="absolute top-2 right-2 bg-red-500 rounded-full p-2 focus:outline-none"
              >
                <FaTimes className="text-white hover:text-gray-300" />
              </button>
            </div>
          )}
         {error &&  <Alert
          color="red"
          className="text-center  text-bold  text-white" 
          >
   {error}
          </Alert>}
          {isLoading && (
  <div className="flex items-center justify-center">
    <BiLoaderAlt className="animate-spin h-8 w-8 text-green-700" />
    <div className="ml-2 text-lg text-green-700">Loading...</div>
  </div>)}
        </div>

        <div className=" md:w-1/2 h-full w-full flex flex-col ">
          <div className="flex flex-col md:gap-1 gap-4">
            <h5 className="md:text-xl text-l font-bold text-gray-800 mb-4">
              <span className="text-greenMain">
                Guidelines for Effective Image Upload:
              </span>{" "}
              Ensuring Accurate Tomatoe Disease Prediction
            </h5>

            <SmallCard text="Supports a  jpg or  image only." />
            <SmallCard text="Supports only a leaf tomato plant." />

            <SmallCard text=" Capture high-quality image." />
            <SmallCard text="Ensure clear views of affected areas." />
            <SmallCard text="Utilize natural lighting whenever possible." />
          </div>
        </div>
      </div>
      <div className="relative ">
        <button onClick={handleUpload} disabled={isLoading} className="absolute right-0 px-6 py-2 text-white rounded-full bg-greenMain hover:bg-darkGreen focus:outline-none">
        {isLoading?(
        <span className="flex flex-row items-center ">
<BiLoaderAlt className="animate-spin text-magenta h-6 w-8" />
<div className="ml-2 text-lg text-green-700">Loading...</div>
        </span>
        ):"Upload"
        }
        </button>
      </div>
    </div>
  );
}

export default InputForm;
