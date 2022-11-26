import React from 'react';
import { MapContainer, TileLayer} from 'leaflet'
import TransitWayInfo from '../components/TransitWayInfo';
import Maps from "../components/Maps";

const TransitWay = () => {
  
  return (
    <div className='flex md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <div className='m-2 flex w-4/5 h-screen rounded-3xl' id='map'>
        <Maps />
      </div>
      <div className='flex w-1/5 h-screen rounded-3xl'>
        <TransitWayInfo />
      </div>      
    </div>
  );
};

export default TransitWay;
