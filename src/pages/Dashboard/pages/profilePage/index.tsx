import React, { useEffect, useState } from "react";
import { ProfileUserStore } from "../../../../hooks/ProfileUserStore";
import { UserData } from "../../../../hooks/ProfileUserStore";
import { BiLoaderAlt } from "react-icons/bi";
import { Alert } from "@material-tailwind/react";

function Profile() {
  console.log(Math.floor(Math.random() * 100) + 1);
  const url: string = `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100) + 1 }.jpg`;
  const { getUser, data,updateProfile ,resetStates, success,isLoading,error } = ProfileUserStore();
  const [userValues, setUserValues] =useState({
    location:"",
    email:"",
    phoneNumber:"",
    name:""
  });
  const [open, setOpen] = useState(false);

      const id = localStorage.getItem("id")?.toString() ?? '';

      useEffect(() => {
        getUser(id);
      }, []);

      useEffect(() => {
        if (data ) {
          const{ 
            location,
          email,
          phoneNumber,
          firstName,
          lastName
          }=data;

          setUserValues({
           location,
          email,
          phoneNumber,
          name:firstName + " " + lastName
          });
        }
      }, [data]);
      //check if user is updated and refetch the user info to update it in real time
      useEffect(()=>{
        if(success){
          
          getUser(id);
        }
      },[success]);
      
const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setUserValues({
    ...userValues,
    [e.target.name]:e.target.value
  });
}
const handleSubmit=()=>{
  const {name,email,phoneNumber,location}=userValues;
  const [firstName,lastName]=name.split(" ");
updateProfile({
  email,
  phoneNumber,
  firstName,
  lastName,
  id,
  location

});

}
function handleClose(){

setOpen(false);
resetStates();

}

  return (
    <>
   { <Alert  open={success?true:false} onClose={handleClose} color="green">{success}</Alert>

   }
   { <Alert open={error?true:false} onClose={handleClose} color="red">{error}</Alert>}
    {userValues?( 
      
    <div className="px-8">
      <div className="flex flex-row justify-center items-center gap-6 w-full md:pl-16 md:mb-16 mb-8">
        <div className="">
          <img
            className="h-auto max-w-full rounded-full"
            src={url}
            alt="profile"
          />
        </div>
        <div className="flex flex-col  w-full ">
          <h1 className="md:text-2xl text-xl text-greenMain font-bold">{userValues.name }</h1>
          <h4 className="md:text-l text-md font-bold">
            
           {userValues.location}
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-1 md2:grid-cols-2  gap-4 md2:px-16 w-full ">
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-l font-medium">Name</h4>
          <input
            className="py-2 text-center rounded-md border border-gray-300 focus:border-blue-500"
            value={userValues.name}
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-l font-medium">Email</h4>
          <input
            className="py-2 text-center rounded-md border border-gray-300 focus:border-blue-500 "
            value={userValues.email}
            type="text"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2  w-full">
          <h4 className="text-l font-medium">Location</h4>
          <input
            className="py-2 text-center rounded-md border border-gray-300 focus:border-blue-500"
            value={userValues.location}
            type="text"
            name="location"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2  w-full">
          <h4 className="text-l font-medium">Phone-Number</h4>
          <input
            className="py-2 text-center rounded-md border border-gray-300 focus:border-blue-500"
            value={userValues.phoneNumber}
            type="number"
            name="phoneNumber"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-24">
         <button disabled={isLoading} onClick={handleSubmit} className="py-2 px-4 text-center bg-greenMain hover:bg-darkGreen text-white cursor-pointer outline-none rounded-md">{isLoading?(
        <span className="flex flex-row items-center ">
<BiLoaderAlt className="animate-spin text-magenta h-6 w-8" />
<div className="ml-2 text-lg text-green-400">Updating...</div>
        </span>
        ):"Save Changes"
        }</button>
      </div>
    </div>
    ):
    (
      <div className="flex justify-center items-center h-screen w-full">
        <h1  className="text-4xl font-bold text-greenMain">Loading...</h1>
      </div>
    )
  }
  </>
  );
}

export default Profile;
