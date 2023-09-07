import React, { useEffect, useRef, useState } from 'react'

import { DeleteButton } from '../../SharedComponents/DeleteButton/DeleteButton'
import { EditButton } from '../../SharedComponents/EditButton/EditButton';

import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, markComplete } from '../../../redux/actions/taskActions';




export function TaskCard({ id, text, type }) {

  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(false);
  const checkedRef = useRef();
  const {pendingTasks, completedTasks} = useSelector(state => state.tasks);


  function handleCheckbox(e) {
    e.stopPropagation();
    setCompleted(prev => !prev)
    dispatch(markComplete(id));
  }

  function handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteTask(id));
  }

  return (
    <div className={`flex flex-col justify-between gap-1.5 ${type === "complete" ? "bg-neutral-300 shadow-none" : "bg-neutral-100 shadow-md"}  shadow-gray-100 px-4 py-2 rounded-lg max-h-[50px] min-h-[50px]`}>

      <div className='flex relative justify-between  gap-4  items-baseline p-2'>

        <label htmlFor={id} className='cursor-pointer w-max flex gap-2'>
          <input id={id} ref={checkedRef} type='checkbox' checked={(completed || type === "complete")} onChange={handleCheckbox} className='accent-orange-200 hover:accent-orange-200' />
          <p className={`${type === "complete" ? "line-through text-neutral-500" : "text-neutral-900"} text-sm font-semibold  overflow-hidden truncate select-none`}>{text}</p>
        </label>


        <div className={` flex absolute top-2 right-0 bg-transparent justify-center items-baseline gap-2 `}>
          {!(type === "complete") && <EditButton id={id} />}
          <DeleteButton handleDelete={handleDelete} />
        </div>
      </div>

    </div>
  );
}
