import React from 'react'
import { Outlet } from 'react-router-dom'

const MainView = () => {
  return (
    <div className='min-w-full min-h-screen bg-slate-900 sm:grid place-items-center'>
      <div className='min-h-screen max-h-screen overflow-y-auto overflow-x-hidden sm:max-w-[400px] sm:min-w-[400px] rounded'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainView