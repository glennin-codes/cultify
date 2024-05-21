import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import useAgrovetsStore from '../../../hooks/AgrovetsStore';
import axios from 'axios';

const LocationButton = () => {

    const {
        // agrovets,
        setAgrovets,
        setSuccessMessage,
        setError,
        loading,
       setLoading
      } = useAgrovetsStore((state) => ({
        // agrovets: state.agrovets,
        setAgrovets: state.setAgrovets,
        setSuccessMessage: state.setSuccessMessage,
        setError: state.setError,
        loading: state.loading,
        setLoading: state.setLoading,
      }));

  const handleClick = async () => {
    setLoading(true);
      
            try {

              const response = await axios.get('http://127.0.0.1:5000/location');
              console.log(response.data);
            if (response.status === 200){
                setError("");
                setAgrovets(response.data);
                setSuccessMessage('Agrovets fetched successfully.');
            }
              
            } catch (error:any) {
               setSuccessMessage("")
               setAgrovets([]);
               setLoading(false)
                console.log(error);
                if (axios.isCancel(error)) {
           
                  console.error("Request canceled:", error.message);
                } else if (error.response) {
                  const status = error?.response?.status as number;
                  const message = error.response?.data?.error as string;
        
                  if (status === 500) {
                    
                    console.error("Internal Server Error:", message);
                  setError(message)
                  } else if (status === 404) {
                    // Handle Not Found Error (status code 404)
                    console.error("not found:", message);
                  setError(message)
                  } else if (status === 400) {
                    // Handle Not Found Error (status code 404)
                    console.error("Conflict Error:", message);
                  setError(message)
                  }
                   else {
                    // Handle other HTTP status codes if needed
                    console.error("Server Error:", status, message);
                  setError(message)
                  }
                } else if (error.request) {
                  // The request was made, but no response was received
                  // console.error("Request Error:", error.request);
        
                  // Handle network errors
                  if (!navigator.onLine) {
                   setError( "Network Error: No internet connection.Please Check your Connections and Try again" );
                    console.error("Network Error: No internet connection.Please Check your Connections and Try again");
                  } else {
                    setError( "Network Disconnect: No internet connection.Please Check your Connections and Try again");
                    console.error("Network disconnect error", error.message);
                    
                  }
                } else {
                  // Something happened in setting up the request that triggered an error
                  console.error("Error:", error.message);
                  setError( "something Went wrong.please try again later" )
                }
            } finally {
              setLoading(false);
            }
          };
      
        
  
  

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`bg-white text-green-400 py-4 px-4 rounded-lg shadow-md transition-all duration-300 ${
        loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-100'
      }`}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 mr-1 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="8"></circle>
          <path

            className="opacity-75 "
            fill="red"
            d="M4 12a8 8 0 018-8V2.5A1.5 1.5 0 0010.5 1h-2A1.5 1.5 0 007 2.5V4a8 8 0 017.7 6.23l-1.51.57A6 6 0 005 12v1"
          ></path>
        </svg>
      ) : (
        <FaMapMarkerAlt className="inline-block mr-1 text-red-600 " size={24} />
      )}
      <span className="text-[#39FF14] prose-lg">Check agrovets in the area.</span>
    </button>
  );
};

export default LocationButton;
