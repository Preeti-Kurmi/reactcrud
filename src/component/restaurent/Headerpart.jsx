import React from 'react';

export default function Headerpart() {
  return (
    // <div className="bg-orange-800 text-white py-4 px-8 flex justify-between items-center">
    //   <h1 className="text-2xl font-bold">ReactMeals</h1>
    //   <button className="bg-orange-900 flex items-center px-4 py-2 rounded-full shadow-lg hover:bg-orange-700 transition">
    //     <svg 
    //       className="w-6 h-6 mr-2" 
    //       fill="currentColor" 
    //       viewBox="0 0 20 20" 
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path 
    //         d="M16 6H3V4h13v2zm-2 6V8H5v4h9zm2 0V8h2v4h-2zM7 18a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4z"
    //       />
    //     </svg>
    //     <span>Your Cart</span>
    //     <span className="bg-red-500 text-xs font-bold rounded-full ml-2 px-2 py-1">0</span>
    //   </button>
    // </div>

    <div className='bg-orange-900 h-32 text-white font-semibold py-4 px-8 justify-between items-center'>
      <h1 className='text-2xl fonnt-bold relative right-2/4 ml-96 pt-10'>ReactMeals</h1>
         <button className="bg-orange-950 flex items-center px-4 py-2 rounded-full shadow-lg hover:bg-orange-700 transition
         absolute left-3/4 top-16">
       <svg 
          className="w-6 h-6 mr-2" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M16 6H3V4h13v2zm-2 6V8H5v4h9zm2 0V8h2v4h-2zM7 18a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4z"
          />
        </svg>
        <span>Your Cart</span>
        <span className="bg-red-500 text-xs font-bold rounded-full ml-2 px-2 py-1">0</span>
      </button>
      
    </div>
  );
}
