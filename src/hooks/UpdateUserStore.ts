import { StoreApi, UseBoundStore, create } from "zustand";
import { UserData } from "./ProfileUserStore";
import axios from "axios";


interface UserProfile {
    
    updateUserData:(updateUserValues:Partial<UserData>)=>Promise<void>;
    isLoading: boolean;
    error: string;
    success: string;
    resetStates:()=>void;
  }
  
export const UpdateUserStore:UseBoundStore<StoreApi<UserProfile>>=create<UserProfile>((set)=>{
    const initialUserState = {
    
        isLoading: false,
        error: "",
        success: "",
      };
    return{
...initialUserState,
updateUserData:async(updateUserValues)=>{
    set({
     isLoading:true
    });

 try {
              const res = await axios.patch(
                `http://localhost:8080/api/users/${updateUserValues.id}`,
                updateUserValues
              );
              const { message } = res.data;
              console.log("updated",res.data);
          
      
              if (res.status === 200) {
                set({
                  error: "",
                  success: message,
                  isLoading: false,
                });
              }
            } catch (error: any) {
              set({ success: "" });
              set({ isLoading: false });
              console.log(error?.response);
              if (axios.isCancel(error)) {
                console.error("Request canceled:", error.message);
              } else if (error.response) {
                const status = error?.response?.status as number;
                const message = error.response?.data?.error as string;
      
                if (status === 500) {
                  console.error("Internal Server Error:", message);
                  set({ error: message });
                } else if (status === 409) {
                  // Handle Not Found Error (status code 404)
                  console.error("Conflict Error:", message);
                  set({ error: message });
                } else {
                  // Handle other HTTP status codes if needed
                  console.error("Server Error:", status, message);
                  set({ error: message });
                }
              } else if (error.request) {
                // The request was made, but no response was received
                // console.error("Request Error:", error.request);
      
                // Handle network errors
                if (!navigator.onLine) {
                  set({
                    error:
                      "Network Error: No internet connection.Please Check your Connections and Try again",
                  });
                  console.error(
                    "Network Error: No internet connection.Please Check your Connections and Try again"
                  );
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
            
         } ,
        resetStates:()=>{
          set({    isLoading: false,
            error: "",
            success: "", });
        }
    }
})