import React from 'react';
import Linker from '../Linker/Linker';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const Home = () => {
    return (
        <div>
            <Linker></Linker>  
            <Outlet></Outlet>

                        <Toaster
            position="top-left"
            reverseOrder={false}
            />

        </div>
    );
};

export default Home;