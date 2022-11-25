import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl'
import React from 'react';

mapboxgl.accessToken = 'pk.eyJ1Ijoia29hc3RlIiwiYSI6ImNsMHptMjU2aTJjNTQza3FvYmZwYXh3bm8ifQ.wmlwEyUDGdfnOn9EmXcZTg';
const Maps = () => {
    useEffect(() => new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/koaste/cl0lfx6mg001515o4erto38ew',
      center: [-79.703291, 43.587639],
      zoom: 10,
    }), [])

  return (
    <div></div>
  )
}

export default Maps