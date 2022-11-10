import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Community from './pages/Community';
import Feed from './pages/Feed';
import RouteURL from './pages/routes';
function App() {
  return (
    <Router>
      <div className=" mx-auto">
        <RouteURL/>
      </div>
    </Router>
  );
}
export default App;
