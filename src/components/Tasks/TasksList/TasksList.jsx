import React, { useEffect } from 'react'

import { CompletedTaskDropdown } from './CompletedTaskDropdown/CompletedTaskDropdown'
import { TaskCard } from '../TaskCard/TaskCard'
import { CreateButton } from '../../SharedComponents/CreateButton/CreateButton'
import { useDocumentTitle } from '../../../hooks/useDocumentTitle'
import { useSelector } from 'react-redux'


export function TasksList() {
    useDocumentTitle("Tasks")

    const { pendingTasks } = useSelector(state => state.tasks)



    return (
        <div className='bg-gray-200 py-4 border-b border-b-black'>
            <div className=' w-full min-h-screen flex flex-col gap-4 p-2 px-4'>
                <div className='flex flex-col gap-4'>
                    {pendingTasks &&
                        Array.from(pendingTasks.values()).map(task => <TaskCard {...task} key={task.id} />)
                    }
                </div>
                <div>
                    <CompletedTaskDropdown />
                </div>
            </div>
            <div>
            </div>
            <CreateButton type={"tasks"} />
        </div>
    )
}
