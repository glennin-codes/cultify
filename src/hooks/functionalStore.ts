import { create } from "zustand";
import axios from "axios";

type uploads={
    formData:FormData,
    id:string
}
type Result={
    title:string,
    url:string,
    content:string
}

 interface FunctionalStore{
    upload:(values:uploads)=>Promise<void>;
    isLoading: boolean;
    error: string;
    success: string ;
    result:Result | null ;
    disease:string;
    

    
}
export const functionalStore=create<FunctionalStore>(  
    (set)=>{
        const initialFuntionState = {
        
            isLoading: false,
            error: "",
            success: "",
            result:null,
            disease:"",
          };
          return{
            ...initialFuntionState,
            upload:async(values)=>{
                const url='http://127.0.0.1:5000/api/predict?id=65eef26bd763d784e34d7fe6'
               try {
                set({
                    isLoading:true

                })
                const res=await axios.post(url,
                    values.formData
                     )
                    
                   if(  res.status == 200){
                    const {result,prediction,message}=res.data;
                    console.log(res.data);
                       set(
                        {
                            isLoading:false,
                            success:message,
                            result:result[0],
                            disease:prediction,
                            error:''
                        }
                       )
                     }
               }catch (error:any) {
                set({success:""})
                set({ isLoading: false });
                console.log(error);
                if (axios.isCancel(error)) {
           
                  console.error("Request canceled:", error.message);
                } else if (error.response) {
                  const status = error?.response?.status as number;
                  const message = error.response?.data?.error as string;
        
                  if (status === 500) {
                    
                    console.error("Internal Server Error:", message);
                    set({ error: message });
                  } else if (status === 404) {
                    // Handle Not Found Error (status code 404)
                    console.error("Conflict Error:", message);
                    set({ error: message });
                  } else if (status === 400) {
                    // Handle Not Found Error (status code 404)
                    console.error("Conflict Error:", message);
                    set({ error: message });
                  }
                   else {
                    // Handle other HTTP status codes if needed
                    console.error("Server Error:", status, message);
                    set({ error: message });
                  }
                } else if (error.request) {
                  // The request was made, but no response was received
                  // console.error("Request Error:", error.request);
        
                  // Handle network errors
                  if (!navigator.onLine) {
                    set({ error: "Network Error: No internet connection.Please Check your Connections and Try again" });
                    console.error("Network Error: No internet connection.Please Check your Connections and Try again");
                  } else {
                    set({ error: "something Went wrong.please try again later" });
                    console.error("frontend error", error.message);
                    
                  }
                } else {
                  // Something happened in setting up the request that triggered an error
                  console.error("Error:", error.message);
                  set({ error: "something Went wrong.please try again later" });
                }
              } finally {
                set({ isLoading: false });
              }
                    
            },
          

          }
        
    }

)