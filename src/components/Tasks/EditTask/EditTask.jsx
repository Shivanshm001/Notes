import React from 'react'
import { useDocumentTitle } from '../../../hooks/useDocumentTitle'
import { useParams } from 'react-router-dom';
import { TaskForm } from '../TaskForm/TaskForm';


export function EditTask() {
    const { taskId } = useParams();
    useDocumentTitle("Tasks | Edit");

    return (
        <div className="grid place-items-center min-h-screen ">
            <div className=" max-w-[95%] sm:max-w-full min-w-[95%] rounded-lg p-4 bg-gray-200 shadow-md shadow-slate-100">
                <TaskForm isEditing={true}/>
            </div>
        </div>
    )
}
