import React from 'react';

import { TbSwords } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import { BiComment } from "react-icons/bi";

import './styles/sidebar.css';


const Sidebar = () => {
  return (
    <nav id='Sidebar'>
      <a id='SidebarLogo' href='https://nebulei.com'>
        <img src='https://storage.googleapis.com/nebulei-main-images/icons/nebulei-svg-logo' alt='nebulei' className='h-10 w-10'></img>
      </a>
      <div id=''>
        <ul id='SidebarItems'>

          <Divider />

          <li id='SidebarElement'>
            <TbSwords id='SidebarIcon' />
          </li>
          <li id='SidebarElement'>
            <BiComment id='SidebarIcon' />
          </li>
          <li id='SidebarElement'>
            <MdOutlineNotifications id='SidebarIcon' />
          </li>

          <Divider />
          
          <li id='SidebarElement'> 
            <AiOutlinePlus id='SidebarIcon' />
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Divider = () => <hr id='SidebarHR' />;


export default Sidebar;