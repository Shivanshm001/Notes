import React from 'react'
import TaskCard from '../TaskCard/TaskCard'
import CreateButton from '../../SharedComponents/CreateButton/CreateButton'
import { useTitle } from '../../../hooks/useTitle'


const TasksList = () => {
    useTitle("Tasks");
    return (
        <div className='bg-gray-200 py-4 border-b border-b-black'>
            <div className=' w-full min-h-screen flex flex-col gap-4 p-2 px-4'>

            </div>
            <CreateButton type={"tasks"} />
        </div>
    )
}

export default TasksList