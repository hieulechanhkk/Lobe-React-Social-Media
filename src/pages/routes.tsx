import React from 'react';
import { Routes, Route} from "react-router-dom";
import Community from './Community';
import Feed from './Feed';
const RouteURL = () => {
    return (
        <Routes>
          <Route path="/" element={<Feed/>}/>
          <Route path="/community" element={<Community/>}/>
        </Routes>
    );
};

export default RouteURL;