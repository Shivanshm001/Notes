import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { DeleteButton } from '../../SharedComponents/DeleteButton/DeleteButton'


import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, markComplete } from '../../../redux/actions/taskActions';


import { AiOutlineEdit } from 'react-icons/ai';
import { IconContext } from 'react-icons';



function EditButton({ id }) {
  return <Link to={`/tasks/edit/${id}`} title='Edit'>
    <IconContext.Provider value={{ className: "border rounded border-gray-200  text-xl" }}>
      <AiOutlineEdit />
    </IconContext.Provider>
  </Link>;
}




export function TaskCard({ id, text, type }) {

  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(false);

  function handleCheckbox(e) {
    e.stopPropagation();
    setCompleted(prev => !prev);
    dispatch(markComplete(id));
  }

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteTask(id))

  }

  return (


    <div className={`flex flex-col justify-between gap-1.5 ${type === "complete" ? "bg-neutral-300 shadow-none" : "bg-neutral-100 shadow-md"}  shadow-gray-100 px-4 py-2 rounded-lg max-h-[50px] min-h-[50px]`}>

      <div className='flex justify-between  gap-4  items-baseline p-2'>

        <label htmlFor={id} className='cursor-pointer w-full'>
          <input id={id} type='checkbox' checked={(completed || type === "complete")} onChange={handleCheckbox} className='accent-orange-200 hover:accent-orange-200' />
          <span className={`${type === "complete" ? "line-through text-neutral-500" : "text-neutral-900"} text-sm font-semibold mx-2   overflow-hidden truncate select-none`}>{text}</span>
        </label>

        <div className=' flex justify-center items-baseline gap-2 '>
          <EditButton id={id} />
          <DeleteButton handleDelete={handleDelete} />
        </div>

      </div>

    </div>
  );
}
