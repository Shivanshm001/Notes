import React, { useRef, useEffect, useState } from 'react'
import { useDocumentTitle } from '../../../hooks/useDocumentTitle'
import { v4 as uuidV4 } from 'uuid';

import { saveTask, writeTask } from '../../../redux/actions/taskActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export function CreateTask() {
  useDocumentTitle("Tasks | Create");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const textRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    textRef.current.focus();
  }, [])

  function handleTask(e) {
    e.preventDefault();
    const uniqueId = uuidV4();

    if (text) {
      dispatch(writeTask(text, uniqueId));
      dispatch(saveTask());

      setText("");
    }
    navigate("/tasks")
  }

  function cancelTask(e){
    e.preventDefault();
    e.stopPropagation();
    navigate("/tasks");
  }

  return (
    <div className="grid place-items-center min-h-screen ">
      <div className=" max-w-[95%] sm:max-w-full min-w-[95%] rounded-lg p-4 bg-gray-200 shadow-md shadow-slate-100">
        <form onSubmit={handleTask} autoComplete='off' className='flex flex-col justify-between min-h-[150px]'>


          <div className='flex p-2 justify-center items-center gap-2'>
            <input ref={textRef} maxLength={50} type="text" name='task' id='task' value={text} onChange={(e) => setText(e.target.value)} className='w-full outline-none bg-transparent font-semibold tracking-wide border-l border-l-gray-400 px-1 text-sm placeholder:text-sm' placeholder='Write here'
            />
            <span className='text-sm text-neutral-700 font-semibold'>{(50 - text.length)}</span>
          </div>


          <div className='flex justify-between gap-2 w-full text-orange-400 text-sm'>
            <button type='button' onClick={cancelTask} className='hover:border border-orange-300 active:scale-95 px-1 py-0.5 rounded'>Cancel</button>
            <button className='hover:border border-orange-300 active:scale-95 px-1 py-0.5 rounded'>Done</button>
          </div>


        </form>
      </div>
    </div>
  )
}
