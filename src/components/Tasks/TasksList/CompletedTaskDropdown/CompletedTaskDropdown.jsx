import React, { useState } from 'react'
import { IconContext } from 'react-icons';

import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { TaskCard } from '../../TaskCard/TaskCard';

export function CompletedTaskDropdown() {
  const [isActive, setIsActive] = useState(true);

  const { completedTasks } = useSelector(state => state.tasks);

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

      <div className={`${(completedTasks && isActive) ? "block" : "hidden"} my-2`}>
        {
          completedTasks && Array.from(completedTasks.values()).map(task => <TaskCard {...task} key={task.id} />)
        }
      </div>
    </>
  )
}