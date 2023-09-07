import React from 'react'

//Hooks
import { useRef, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//Dependencies
import { v4 as uuidV4 } from 'uuid';

//Redux
import { editTask, saveTask, writeTask } from '../../../redux/actions/taskActions';
import { useDispatch, useSelector } from 'react-redux';

export function TaskForm({ isEditing }) {

    const { taskId } = useParams();

    const [text, setText] = useState("");
    const [oldTask, setOldTask] = useState({});
    const textRef = useRef();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { pendingTasks } = useSelector(state => state.tasks);

    useEffect(() => {
        textRef.current.focus();
    }, [])

    useEffect(() => {
        setOldTask(pendingTasks.get(taskId));
    }, [isEditing, taskId])

    useEffect(() => {
        if(oldTask) setText(oldTask.text)
    }, [oldTask]);


    function handleTask(e) {
        e.preventDefault();
        const uniqueId = (isEditing && taskId) ? taskId : uuidV4();

        if (text) {
            dispatch(writeTask(text, uniqueId));
            dispatch(saveTask());

            if (isEditing) dispatch(editTask(taskId));
            else dispatch(saveTask());

            setText("");
        }
        navigate("/tasks")
    }

    function cancelTask(e) {
        e.preventDefault();
        e.stopPropagation();
        navigate("/tasks");
    }


    return (
        <form onSubmit={handleTask} autoComplete='off' className='flex flex-col justify-between min-h-[150px]'>


            <div className='flex p-2 justify-center items-center gap-2'>
                <input ref={textRef} maxLength={50} type="text" name='task' id='task' value={text} onChange={(e) => setText(e.target.value)} className='w-full outline-none bg-transparent font-semibold tracking-wide border-l border-l-gray-400 px-1 text-sm placeholder:text-sm ' placeholder='Write here'
                />
                <span className='text-sm text-neutral-700 font-semibold'>{text && (50 - text.length)}</span>
            </div>


            <div className='flex justify-between gap-2 w-full text-orange-400 text-sm'>
                <button type='button' onClick={cancelTask} className='hover:border border-orange-300 active:scale-95 px-1 py-0.5 rounded'>Cancel</button>
                <button className='hover:border border-orange-300 active:scale-95 px-1 py-0.5 rounded'>Done</button>
            </div>


        </form>
    )
}
