import React from 'react';
import Maps from '../components/Maps';

const BusStops = () => {
  return (
    <div className='m-2 flex w-4/5 h-screen md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl' id='map'>
      <Maps />
    </div>
  );
};

export default BusStops;
