import React from 'react';
import './Cart.css';


const Cart = ({cart, removeFromCart}) => {

    let message;
    if(cart.length===0){
        message= <p className='text-blue-700'>Add some product</p>
    }

    return (
        <div className={cart.length==0 ? 'red':'green'} id='cart'>
            {/* conditional CSS apply  */} 
            <h2>Total Order:{cart.length}</h2>
            {message}
            {
               cart.map(c=> <p 
                key={c._id}
               >{c.name} <button onClick={()=>removeFromCart(c._id)} className='bg-teal-600'><span className='py-1 py-0 text-red-700 font-extrabold'>x</span></button></p>)
            }
        </div>
    );
};

export default Cart;