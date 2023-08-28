import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { DeleteButton } from '../../SharedComponents/DeleteButton/DeleteButton'


import { useDispatch, useSelector } from 'react-redux';
import { markComplete } from '../../../redux/actions/taskActions';


import { AiOutlineEdit } from 'react-icons/ai';
import { IconContext } from 'react-icons';



function EditButton({ id }) {
  return <Link to={`/tasks/edit/${id}`} title='Edit'>
    <IconContext.Provider value={{ className: "border rounded border-gray-200  text-xl" }}>
      <AiOutlineEdit />
    </IconContext.Provider>
  </Link>;
}




export function TaskCard({ id, text, date, time }) {

  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();


  function handleCheckbox(e) {
    e.stopPropagation();
    setCompleted(prev => !prev);
    dispatch(markComplete(completed));
  }

  function handleDelete(e) {
    e.preventDefault();
    console.log("Delete task");
  }

  return (


    <div className={`flex flex-col justify-between gap-1.5 ${completed ? "bg-neutral-300 shadow-none" : "bg-neutral-100 shadow-md"}  shadow-gray-100 px-4 py-2 rounded-lg max-h-[50px] min-h-[50px]`}>

      <div className='flex justify-between  gap-4  items-baseline p-2'>

        <label htmlFor={id} className='cursor-pointer'>
          <input id={id} type='checkbox' checked={completed} onChange={handleCheckbox} className='accent-orange-300' />
          <span className={`${completed ? "line-through" : ""} text-sm font-semibold mx-2 text-neutral-900  overflow-hidden truncate select-none`}>{text}</span>
        </label>

        <div className=' flex justify-center items-baseline gap-2 '>
          <EditButton id={id} />
          <DeleteButton handleDelete={handleDelete} />
        </div>

      </div>

    </div>
  );
}
