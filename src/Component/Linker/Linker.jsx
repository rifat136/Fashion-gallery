import React from 'react';
import { Link } from 'react-router-dom';



const Linker = () => {
    return (
        <div className=' flex justify-center space-x-5 font-extrabold  text-2xl p-4 bg-slate-200 pb-5'>
            <Link to="/">Home</Link>
            <Link to="/">Shop</Link> 
            <Link to="/order">Order</Link> 
        </div>
    );
};

export default Linker;