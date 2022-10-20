import React from 'react';

import './styles/topnav.css';
import { Link } from 'react-router-dom'


const Topnav = () => {
  return (
    <nav className='fixed w-full h-16 backdrop-blur-xl bg-white/80'>
      <div className='h-16 shadow-lg '>
        <div className='max-w-full mx-auto px-4 flex justify-between items-center h-full'>

          <div className="flex items-center gap-3">
            <Link to={`/`}>
              <img className='h-8 w-8 flex' src={`https://storage.googleapis.com/nebulei-main-images/icons/nebulei-svg-logo`} alt="Nebulei Logo"></img>
            </Link>
            <div>Nebulei</div>
          </div>

          <div className='md:flex'>
            <ul className='flex text-black items-center nebulei-font'>
              {/* <Link to={`/`} className='bg-transparent hover:underline hover:underline-offset-8 font-semibold py-2 px-4 rounded-full mx-4'>
                Sign Up
              </Link>
              <Link to={`/`} className='bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-full'>
                Login
              </Link> */}
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};


export default Topnav;