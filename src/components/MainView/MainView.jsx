import React from 'react'
import { Outlet } from 'react-router-dom'

import { BiNotepad, BiListUl } from 'react-icons/bi';
import Li from './Li';



const MainView = () => {
  return (
    <div className='min-w-full min-h-screen bg-slate-900 sm:grid place-items-center'>
      <div className='min-h-screen max-h-screen overflow-y-auto overflow-x-hidden sm:max-w-[400px] sm:min-w-[400px] rounded'>
        <div className='bg-white flex justify-center items-center p-2'>
          <ul className='flex justify-center items-center gap-4 p-1 border rounded border-gray-500 w-1/2'>
            <Li to={"/notes"} icon={<BiNotepad />} />
            <Li to={"/tasks"} icon={<BiListUl />} />
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainView