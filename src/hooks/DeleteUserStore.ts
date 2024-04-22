import { StoreApi, UseBoundStore, create } from "zustand";

interface DeleteUserInterface{
    
    userDelete:(id:string)=>Promise<void>;
deleteError:string;
deleteSucess:string;
deleteIsLoading:boolean

}
export const DeleteUserStore:UseBoundStore<StoreApi<DeleteUserInterface>>=create<DeleteUserInterface>((set)=>{
const initialUserState={
    deleteError:"",
    deleteSucess:"",
deleteIsLoading:false
}
return{
    ...initialUserState,
    userDelete:async(id)=>{
        

    }
}
})