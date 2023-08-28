import React, { useEffect } from 'react'
import { TaskCard } from '../TaskCard/TaskCard'
import { CreateButton } from '../../SharedComponents/CreateButton/CreateButton'
import { useDocumentTitle } from '../../../hooks/useDocumentTitle'
import { useSelector } from 'react-redux'


export function TasksList() {
    useDocumentTitle("Tasks")

    const allTasks = useSelector(state => state.tasks.allTasks)
    useEffect(() => {
        console.log(allTasks)
    }, [])

    return (
        <div className='bg-gray-200 py-4 border-b border-b-black'>
            <div className=' w-full min-h-screen flex flex-col gap-4 p-2 px-4'>
                {allTasks &&
                    allTasks.map(task => <TaskCard {...task} key={task.id} />)
                }
                <p>Completed</p>
            </div>
            <div>
            </div>
            <CreateButton type={"tasks"} />
        </div>
    )
}
