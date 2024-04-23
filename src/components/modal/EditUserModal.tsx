import { FormEvent, useEffect, useState } from "react";
import { UserData } from "../../hooks/ProfileUserStore";
import { BiLoaderAlt } from "react-icons/bi";
import { UpdateUserStore } from "../../hooks/UpdateUserStore";
import { Alert } from "@material-tailwind/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  setValues: React.Dispatch<React.SetStateAction<UserData>>;
  values: UserData;
}
export const EditUserModal = ({
  isOpen,
  onClose,
  values,
  setValues,

}: Props) => {
  const {updateUserData,resetStates,success,isLoading,error}=UpdateUserStore();
  useEffect(()=>{
    resetStates();
  },[]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
const [updateValues,setUpdateValues]=useState<Partial<UserData>>({})
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose(); // Close the modal when Escape key is pressed
      }
    };

    if (isOpen) {
      // Add event listener when the modal is open
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      // Clean up by removing the event listener when the modal is closed
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

 

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const {name,value}=e.target;
  setUpdateValues({ ...updateValues, [name]: value });
  setValues({ ...values, [name]: value });
};
const handleSubmit=(e:FormEvent)=>{

  e.preventDefault();
  const missedData={
    ...updateValues,
    id:values.id,
    makeAdmin: isAdmin,
  }
   updateUserData(missedData);
  }

useEffect(()=>{
  if(success){
    onClose();
  }

},[success]);
// Handle checkbox change
const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setIsAdmin(e.target.checked);
 
};

  return (
    <>
      {isOpen && (
        <div className="font-Montserrat fixed inset-0 z-50 flex items-center justify-center">
          <div
            onClick={onClose}
            className="fixed inset-0 bg-black opacity-50 transitional-opacity"
          ></div>
          <div className="fixed bg-white md:p-4  p-8 md:max-w-[500px] rounded-md  w-full rounded-md shadow-md">
           {error && <Alert className=" border-solid border-l-4 border-[#EF4444] bg-red-500/20 text-white p-2 rounded text-center font-medium text-red-500">{error}</Alert>}
            <form  onSubmit={handleSubmit} className="flex flex-col space-y-2 text-sm md:text-base w-full mt-2 md:mb-8">
              <h2 className="text-center text-2xl font-semibold text-gray-500 ">
                Update user {values.firstName + " " + values.lastName}
              </h2>
              <div className="flex  flex-col md:flex-row md:justify-between w-full md:space-x-2 space-y-2 md:space-y-0">
                <div className="md:w-1/2  w-full">
                  <>
                    <label
                      htmlFor="firstName"
                      className="text-blackSubtitles mb-2 font-semibold block"
                    >
                      First name
                    </label>
                    <input
                      onChange={handleChange}
                      value={values.firstName}
                      name="firstName"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400`}
                    />
                  </>
                </div>
                <div className="md:w-1/2   ">
                  <>
                    <label className="text-blackSubtitles mb-2  font-semibold block">
                      Last Name
                    </label>
                    <input
                      onChange={handleChange}
                      name="lastName"
                      value={values.lastName}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400`}
                    />
                  </>
                </div>
              </div>
              <div className="flex  flex-col md:flex-row md:justify-between w-full md:space-x-2 space-y-2 md:space-y-0">
                <div className="md:w-1/2  w-full">
                  <>
                    <label
                      htmlFor="email"
                      className="text-blackSubtitles mb-2 font-semibold block"
                    >
                      Email
                    </label>
                    <input
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400`}
                    />
                  </>
                </div>
                <div className="md:w-1/2   ">
                  <>
                    <label className="text-blackSubtitles mb-2  font-semibold block">
                      Location
                    </label>
                    <input
                      onChange={handleChange}
                      value={values.location}
                      name="location"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400`}
                    />
                  </>
                </div>
              </div>
              <div className="flex  flex-col md:flex-row md:justify-between w-full md:space-x-2 space-y-2 md:space-y-0">
                <div className="md:w-1/2  w-full">
                  <>
                    <label
                      htmlFor="phoneNumber"
                      className="text-blackSubtitles mb-2 font-semibold block"
                    >
                      Phone Number
                    </label>
                    <input
                      onChange={handleChange}
                      value={values.phoneNumber}
                      name="phoneNumber"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400`}
                    />
                  </>
                </div>
                <div className="md:w-1/2   ">
                  <>
                    <label className="text-blackSubtitles mb-2  font-semibold block">
                      Password
                    </label>
                    <input
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400`}
                    />
                  </>
                </div>
              </div>

                {/* Make Admin Checkbox */}
                <div className="flex justify-center items-center mt-4 cursor-pointer   ">
                <input
                  type="checkbox"
                  id="isAdmin"
                  checked={isAdmin}
                  onChange={handleCheckboxChange}
                  className="mr-2 p-2  cursor-pointer"
                />
                <label htmlFor="isAdmin" className="text-sm text-gray-700 cursor-pointer outline-none ">
                  Make Admin
                </label>
              </div>


              <div className=" flex flex-col items-center w-full">
                <div className="mt-4 flex justify-between w-full max-w-sm">
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                   
                    className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none"
                  >
                 {isLoading ? (
                <span className="flex flex-row items-center ">
                  <BiLoaderAlt className="animate-spin text-magenta h-6 w-8" />
                  <div className="ml-2 text-lg text-green-400">Updating...</
div>
                </span>
              ) : (
                "Save Changes"
              )}  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};