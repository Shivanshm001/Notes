import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconContext } from 'react-icons';

const Li = ({ to, icon, title }) => {

  const location = useLocation();


  return (
    <li className={`border border-gray-400 active:scale-90 rounded ${(location.pathname.slice(0,6) === to) ? "bg-yellow-400" : ""}`} title={title}>
      <Link to={to} replace={true} className=''>
        <IconContext.Provider value={{ className: `text-2xl` }}>
          {icon}
        </IconContext.Provider>
      </Link>
    </li>
  );
};


export default Li;