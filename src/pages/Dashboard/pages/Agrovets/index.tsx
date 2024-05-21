import React, { useEffect, useState } from 'react';
import useAgrovetsStore from '../../../../hooks/AgrovetsStore';
import axios from 'axios';
import { FaMapMarkerAlt } from 'react-icons/fa';

const AgrovetList = () => {
    const { agrovets} = useAgrovetsStore((state)=>({
        agrovets:state.agrovets
    }));
const placeholder="https://placehold.co/600x400/39FF14/white?text=No+Image"
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-8 text-gray-400">Agrovets within Nairobi</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {  agrovets?.map((agrovet, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                        <img
                            src={agrovet.PhotoUrl || placeholder} // Use placeholder if no photo
                            alt={agrovet.Name}
                            className="rounded-lg mb-4 w-full h-48 object-cover"
                        />
                        <h2 className="text-xl font-semibold mb-2">{agrovet.Name}</h2>
                        <p className="text-gray-700 mb-2">{agrovet.Address}</p>
                        {agrovet['PhoneNumber'] ? (
                            <p className="text-gray-700 mb-2">Phone: {agrovet['PhoneNumber']}</p>
                        ): (
                            <p className="text-gray-700 mb-2">Phone: <span className='text-red-900'>!! Was not provided kindly !!</span></p>
                            )
                        }
                        <a
                            href={agrovet['GoogleMapsLink']}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                           <span>
                           <FaMapMarkerAlt className="inline-block mr-1 text-red-600 " size={24} />
                            </span> View on Google Maps
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AgrovetList;
