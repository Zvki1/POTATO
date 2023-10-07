import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import customMarkerIcon from "../../assets/R.png";
import Popup from '../../components/popup/Popup';
import Popup2 from '../../components/popup2/Popup2';

const unvIcon = L.icon({
  iconUrl: customMarkerIcon,  
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const InteractiveMap = () => {
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const [showUp, setShowUp] = useState(false);
  const [showUp2, setShowUp2] = useState(false);

  const fetchInterval = 1000;

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/uav/1");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    // Initial fetch when the component mounts
    fetchData();
    // Set up an interval to fetch data periodically
    const intervalId = setInterval(fetchData, fetchInterval);
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts.
  const lat = data["uav1/gps/lat"] || 50; // Default to 50 if lat is not available
  const lon = data["uav1/gps/lon"] || 50; // Default to 50 if lon is not available


//2//
const fetchData2 = async () => {
  try {
    const response = await fetch("http://localhost:5000/uav/2");
    const jsonData = await response.json();
    setData2(jsonData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
useEffect(() => {
  fetchData2();
  const intervalId = setInterval(fetchData2, fetchInterval);
  return () => {
    clearInterval(intervalId);
  };
}, []); 
const lat2 = data2["uav2/gps/lat"] || 50; 
const lon2 = data2["uav2/gps/lon"] || 50; 
//2//


  const handleMarkerClick = () => {
    setShowUp(!showUp);
  };
  const handleMarkerClick2 = () => {
    setShowUp2(!showUp2);
  };


  return (
    <MapContainer zoomControl={false} center={[lat, lon]} zoom={3} style={{ height: '100vh', width: '100vw' }}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={[lat, lon]} icon={unvIcon} eventHandlers={{ click: handleMarkerClick }}>
        {showUp && <Popup data={data} />}
      </Marker>

      <Marker position={[lat2, lon2]} icon={unvIcon} eventHandlers={{ click: handleMarkerClick2 }}>
        {showUp2 && <Popup2 data={data2} />}
      </Marker>

      {/* Custom Zoom Control */}
      <div style={{ position: 'topright', zIndex: 1000 }}>
        <ZoomControl position="topright" />
      </div>
    </MapContainer>
  );
};

export default InteractiveMap;
