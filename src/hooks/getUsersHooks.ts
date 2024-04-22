import axios from "axios";
import { StoreApi, UseBoundStore, create } from "zustand";
type users={
    firstName:string,
    lastName:string,
    createdAt:string
    predictions:[],
    email:string,
    location:string,
    phoneNumber:string,
    password:string,
    _id:string,

}
interface GetUserState{
    getUsers:()=>Promise<void>;
    Users: users[] | null;
    isLoading:boolean;
    error:string;
    success:string;
    resetState:()=>void;
}

export const UseGetUserStore: UseBoundStore<StoreApi<GetUserState>>=create<GetUserState>((set)=>{
    const initialState={
        Users:null,
        success:'',
        error:'',
        isLoading:false

    }
    return{
        ...initialState,
        getUsers:async()=>{
            set({
                isLoading:true

            });

            try {
                const res=axios.get('http://localhost:8080/api/users');
               
               if ((await res).status==200){
                const data=(await res).data;
                console.log(data)
                set({
                    isLoading:false,
                    success: "users fetched succesfuly",
                    Users:data,
                    error:''
                });
               }
                

            } catch (error:any) {
                console.error(error)
                set({
                    isLoading:false
                });
                if(error?.response){

                    const status = error?.response?.status as number;
                    const message = error.response?.data?.error as string;
                    if(status===401){
                        set({
                            error: "Unauthorized, please login"
                        });
                    }else if(status===500){
                         set({
                            error: message ||'Internal Server Error , Please Try Again Later'
                         })
                    }else if(status=== 403){
                        set({
                            error: 'Forbidden Access , You are not allowed to view this resource.'
                        })
                    }
                }else{
                   if(error.request){
                    if(!navigator.onLine){
                        set({
                            error: "You are offline.Please check your internet  connection."
                        });
                    }else{
                        set({
                            error: "Something went wrong while processing your request.Please  try again later."
                        });
                    };
                   }
                }
            }
        },

        resetState: () => {
            set({ ...initialState });
          }

    }
})