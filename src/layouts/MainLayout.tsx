import React from 'react';
import Navbar from "../components/Navbar"
const MainLayout = (props: any) => {
  return <div className="mx-auto relative">
    {/* NavBar */}
    <Navbar></Navbar>
    {/* Body */}
    <div className='flex gap-1'> 
        {/* SideBar */}

        {/* Content {props.child} */}

        {/* Friends online */}
    </div>
  </div>;
};

export default MainLayout;
