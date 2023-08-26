import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { BiNotepad, BiListUl } from 'react-icons/bi';
import Li from './Li';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useSelector } from 'react-redux';



const MainView = () => {
  const location = useLocation();




  return (
    <div className='min-w-full min-h-screen bg-slate-900 sm:grid place-items-center'>
      <div className='min-h-screen max-h-screen overflow-y-auto overflow-x-hidden sm:max-w-[400px] sm:min-w-[400px] rounded'>
        {
          (location.pathname === "/notes" || location.pathname === "/tasks") &&
          <div className='bg-white flex justify-center items-center p-2'>
            <ul className='flex justify-center items-center gap-4 p-1 border rounded border-gray-500 w-1/2'>
              <Li to={"/notes"} icon={<BiNotepad />} title={"Notes"} />
              <Li to={"/tasks"} icon={<BiListUl />} title={"Tasks"} />
            </ul>
          </div>
        }
        <Outlet />
      </div>
    </div>
  )
}

export default MainView