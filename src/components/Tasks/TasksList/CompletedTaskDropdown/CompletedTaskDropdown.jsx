import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons';

import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { TaskCard } from '../../TaskCard/TaskCard';

export function CompletedTaskDropdown() {
  const [isActive, setIsActive] = useState(false);

  const { completedTasks } = useSelector(state => state.tasks);

  useEffect(() => {
    if(completedTasks.size > 0) setIsActive(true);
  },[completedTasks.size]);

  
  return (
    <>
      <button onClick={() => setIsActive(prev => !prev)} className={`${completedTasks ? "block" : "hidden"} scale-110`}>
        <div className='flex gap-x-1'>
          <span className='text-neutral-500'>
            {isActive ? <BiChevronDown /> : <BiChevronRight />}
          </span>
          <span className='text-xs font-semibold tracking-wider text-neutral-500'>Completed</span>
        </div>
      </button>

      <div className={`${(completedTasks && isActive) ? "flex" : "hidden"} my-2 flex-col gap-4`}>
        {
          completedTasks && Array.from(completedTasks.values()).map(task => <TaskCard {...task} key={task.id} />)
        }
      </div>
    </>
  )
}