import axios from "axios";
import { StoreApi, UseBoundStore, create } from "zustand";
export type UserData = {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  location:string;
  id:string,
  password:string
};
type UpdateValues={
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    id:string
    location:string,
}

interface UserProfile {
  getUser: (id: string) => Promise<void>;
  updateProfile:(updateUserValues:UpdateValues)=>Promise<void>;
  data: UserData | null;
  isLoading: boolean;
  error: string;
  success: string;
  resetStates:()=>void;
}

export const ProfileUserStore: UseBoundStore<StoreApi<UserProfile>> = create<UserProfile>(
  (set) => {
    const initialUserState = {
      data: null,
      isLoading: false,
      error: "",
      success: "",
    };
    return {
            ...initialUserState,
            getUser: async (id) => {
            set({
                
                error: "",
                success: "",

            });

            try {
                const res = axios.get(`http://localhost:8080/api/users/${id}`);

                if ((await res).status == 200) {
                const data = (await res).data;
              
                const { email, phoneNumber, firstName, lastName ,location,_id,password} = data;
                set({
                    isLoading: false,
                    
                    data:{
                      email,
                      phoneNumber,
                      firstName,
                      lastName,
                      location,
                      password,
                      id:_id

                    },
                    error: "",
                });
                }
            } catch (error: any) {
                console.error(error);
                set({
                isLoading: false,
                });
                if (error?.response) {
                const status = error?.response?.status as number;
                const message = error.response?.data?.error as string;
                if (status === 401) {
                    set({
                    error: "Unauthorized, please login",
                    });
                } else if (status === 500) {
                    set({
                    error:
                       "Internal Server Error , Please Try Again Later",
                    });
                } else if (status === 403) {
                    set({
                    error:
                        "Forbidden Access , You are not allowed to view this resource.",
                    });
                }
                } else {
                if (error.request) {
                    if (!navigator.onLine) {
                    set({
                        error:
                        "You are offline.Please check your internet  connection.",
                    });
                    } else {
                    set({
                        error:
                        "Something went wrong while processing your request.Please  try again later.",
                    });
                    }
                }
                }
            }
            },
        updateProfile:async(updateUserValues) => {

          
            set({ error: "" });
            set({ success: "" });
            set({ isLoading: true });
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
          set({   
             isLoading: false,
            error: "",
            success: "",
           });
        }

    };
  }
);
