import React, { useEffect , useState} from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';

import HomePage from './modules/pages/home';
import MapPage from './modules/pages/mapPage';
import LiveStreamPage from './modules/pages/liveStremPage';

import LoginPage from './modules/pages/login';
import Navbar from './modules/components/navBar';
import './App.css';
import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {

 // State to track authentication status
 const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));

 // Effect to watch for changes in localStorage
 useEffect(() => {
   // Check if the token changes in localStorage
   const token = localStorage.getItem('token');
   if (token) {
     // If a token is found, set authentication status to true
     setAuthenticated(true);
   } else {
     // If no token is found, set authentication status to false
     setAuthenticated(false);
   }
 }, []); // Empty dependency array means t

  return (
    <BrowserRouter>

    {/* the div li fih koulchi */}
      <div className="app_container h-screen flex w-screen" >
      
       { authenticated ? <Navbar/>: <></>}

        <div className="content">
          <Routes>   
              <Route path="/" element={<ProtectedRoute> <HomePage/> </ProtectedRoute> }/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/map" element={<ProtectedRoute> <MapPage/> </ProtectedRoute> }/>
              <Route path="/live" element={<ProtectedRoute> <LiveStreamPage/> </ProtectedRoute> }/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
