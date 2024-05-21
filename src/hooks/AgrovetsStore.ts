import { StoreApi, UseBoundStore, create } from 'zustand';
type Agrovet={
    Name: string,
    Address: string,
    PhoneNumber: string,
    GoogleMapsLink: string,
    PhotoUrl: string
}
interface AgrovetsStore {
  agrovets: Agrovet[];
  setAgrovets: (data: Agrovet[]) => void;
  successMessage:string | null;
  setSuccessMessage: (message:string)=>void;
  error:string | null;
  setError: (message:string)=>void;
  loading:boolean;
  setLoading:(status:boolean)=>void;
}

const useAgrovetsStore: UseBoundStore<StoreApi<AgrovetsStore>> = create<AgrovetsStore>((set)  => ({
    agrovets: [],
  successMessage:null,
  error:null,
  loading:false,
  setAgrovets: (data) => set({ agrovets: data }),
  setError:(message)=>set({error:message}),
  setSuccessMessage:(message) => set({successMessage:message}),
  setLoading:(status)=>set({loading:status})
}));

export default useAgrovetsStore;