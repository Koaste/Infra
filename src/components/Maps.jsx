import { useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import data from '../data/miwayData.json'

import React from 'react'

mapboxgl.accessToken = 'pk.eyJ1Ijoia29hc3RlIiwiYSI6ImNsMHptMjU2aTJjNTQza3FvYmZwYXh3bm8ifQ.wmlwEyUDGdfnOn9EmXcZTg'

const Maps = () => {
    useEffect(() => new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/koaste/cl0lfx6mg001515o4erto38ew',
      center: [-79.703291, 43.587639],
      zoom: 10,
    }), [])

    // data.forEach((name) => {
		// 	var marker = new mapboxgl.Marker()
		// 					.setLngLat(name.coordinates)
		// 					.setPopup(new mapboxgl.Popup({ offset: 30 })
		// 					.setHTML('<h4>' + location.city + '</h4>' + location.location))
		// 					.addTo();
    // })

  return (
    <div>
      {/* <Marker 
        latitude={-79.70}
        longitude={43.58}
      /> */}
    </div>
  )
}

export default Maps