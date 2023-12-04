import { ChangeEvent, FormEvent, useState } from "react"

export const Signup=():JSX.Element=>{
    const [values, setValues] = useState({
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
       
      });
  
    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setValues((prevValues)=>({
        ...prevValues,
        [name]:value
      }))
     
    };

    const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }
  
    return(
        <div className="min-h-screen  flex items-center justify-center mt-0 space-y-0 bg-logins bg-no-repeat w-full bg-bottom bg-cover px-6 ">
              <div className=" flex flex-col shadow-md  p-8 bg-white w-full max-w-md rounded-md font-Poppins">
                     <h1 className="text-center text-mainHeading text2xl md:text-3xl font-bold">
                     Welcome to <span className="text-darkGreen">Cultify</span>
                     </h1>
                     <h1
                     className=" font-bold text-2xl md:text-3xl text-greenMain text-center"
                     >
                         Signup
                     </h1>
                     <form  onSubmit={handleSubmit} className="flex flex-col space-y-2 text-sm md:text-base w-full mt-6">
                            <div className="flex  flex-col md:flex-row md:justify-between w-full md:space-x-2 space-y-2 md:space-y-0">
                                
                                <div className="md:w-1/2  w-full">
                                    <label className="text-blackSubtitles mb-2 font-semibold block">
                                    First name
                                    </label>
                                    <input  
                            onChange={handleChange}
                            value={values.firstName}
                            type="firstName"
                            name="firstName"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400"
                            />
                                </div>
                                <div className="md:w-1/2   ">
                                    <label className="text-blackSubtitles mb-2  font-semibold block">
                                    Last Name
                                    </label>
                                    <input  
                            onChange={handleChange}
                            value={values.lastName}
                            type="lastName"
                            name="lastName"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400"
                            />
                                </div>

                            </div>
                            <label
                            htmlFor="userName"
                            className="text-blackSubtitles font-semibold mb-2 block"
                            >
                                Enter your password address 
                            </label>
                            <input  
                            onChange={handleChange}
                            value={values.userName}
                            type="text"
                            name="userName"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400"
                            />
                            <label
                            htmlFor="password"
                            className="text-blackSubtitles font-semibold mb-2 block"
                            >
                                Enter your password
                            </label>

                            <input  
                            onChange={handleChange}
                            value={values.password}
                            type="password"
                            name="password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400"
                            />
                            <div className="flex flex-raw md:justify-between space-x-4 mb-4">
                                <p className="text-blackSubtitles text-base hover:text-green-500 focus:outline-none cursor-pointer">
                                Forgot Password
                                </p>
                                <p className="text-blackSubtitles text-base">
                                No Account ? <span className="text-darkGreen hover:text-green-500 focus:outline-none cursor-pointer">Sign up</span>
                                </p>
                            </div>
                            <button type="submit" className="w-full   rounded-md focus:outline-none focus:shadow-outline-blue-500 hover:bg-darkGreen text-white py-2 px-4 bg-greenMain text-center">
                                SignUp
                            </button>
                    </form> 

              </div>

        </div>
    )
}