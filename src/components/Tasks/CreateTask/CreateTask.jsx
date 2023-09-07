import React from 'react'
import { useDocumentTitle } from '../../../hooks/useDocumentTitle'
import { TaskForm } from '../TaskForm/TaskForm';


export function CreateTask() {
  useDocumentTitle("Tasks | Create");

  return (
    <div className="grid place-items-center min-h-screen ">
      <div className=" max-w-[95%] sm:max-w-full min-w-[95%] rounded-lg p-4 bg-gray-200 shadow-md shadow-slate-100">
        <TaskForm isEditing={false} />
      </div>
    </div>
  )
}
