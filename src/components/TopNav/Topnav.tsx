import React from 'react';

import './styles/topnav.css';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';


const Topnav = () => {
  return (
    <nav className='relative w-full h-16 backdrop-blur-xl bg-white/80'>
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
              <MenuIcon className="text-purple"/>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};


export default Topnav;