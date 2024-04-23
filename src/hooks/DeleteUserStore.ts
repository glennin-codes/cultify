import axios from "axios";
import { StoreApi, UseBoundStore, create } from "zustand";

interface DeleteUserInterface{
    
    userDelete:(id:string,name:string)=>Promise<void>;
deleteError:string;
deleteSucess:string;
deleteIsLoading:boolean;
resetDeleteStates:()=>void;

}
export const DeleteUserStore:UseBoundStore<StoreApi<DeleteUserInterface>>=create<DeleteUserInterface>((set)=>{
const initialUserState={
    deleteError:"",
    deleteSucess:"",
deleteIsLoading:false
}
return{
    ...initialUserState,
    userDelete:async(id,name)=>{
        
        try {
            const res = await axios.delete(
              `http://localhost:8080/api/users/${id}`,
              )
            const { message } = res.data;
            
    console.log("message",message);
            if (res.status === 200) {
              set({
                deleteError: "",
                deleteSucess: `Deleted User ${name} Sucessfully!`,
                deleteIsLoading: false,
              });
            }
          } catch (error: any) {
            set({deleteSucess: "" });
            set({ deleteIsLoading: false });
            console.log(error?.response);
            if (axios.isCancel(error)) {
              console.error("Request canceled:", error.message);
            } else if (error.response) {
              const status = error?.response?.status as number;
              const message = error.response?.data?.message as string;
      
              if (status === 500) {
                console.error("Internal Server Error:", message);
                set({ deleteError: message });
              } else if (status === 404) {
                // Handle Not Found Error (status code 404)
                console.error("Conflict Error:", message);
                set({ deleteError: message });
              } else {
                // Handle other HTTP status codes if needed
                console.error("Server Error:", status, message);
                set({ deleteError: message });
              }
            } else if (error.request) {
              // The request was made, but no response was received
              // console.error("Request Error:", error.request);
    
              // Handle network errors
              if (!navigator.onLine) {
                set({
                  deleteError:
                    "Network Error: No internet connection.Please Check your Connections and Try again",
                });
                console.error(
                  "Network Error: No internet connection.Please Check your Connections and Try again"
                );
              } else {
                set({ deleteError: "something Went wrong.please try again later" });
                console.error("frontend error", error.message);
              }
            } else {
              // Something happened in setting up the request that triggered an error
              console.error("Error:", error.message);
              set({ deleteError: "something Went wrong.please try again later" });
            }
          } finally {
            set({ deleteIsLoading: false });
          }
          
       } ,
      resetDeleteStates:()=>{
        set({    deleteIsLoading: false,
          deleteError: "",
          deleteSucess: "", });
      }
}
})