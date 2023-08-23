import React from 'react'

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { deleteNote } from '../../../redux/actions/noteActions';
import DeleteButton from '../../SharedComponents/DeleteButton/DeleteButton';

const NoteCard = ({ id, title, text, date, time }) => {
  const dispatch = useDispatch();

  function handleDelete(e) {
    e.stopPropagation();
    dispatch(deleteNote(id));
  }
  return (
    <div className='relative'>
      <Link to={`edit/${id}`}>
        <div id={id} className='flex flex-col justify-between gap-1.5 bg-neutral-100 shadow-md shadow-gray-100 px-4 py-2 rounded-lg max-h-[100px] min-h-[100px]'>
          <div>
            <h1 className='text-lg font-bold pb-0.5 truncate'>{title ? title : text.slice(0, 25)}</h1>
            <p className='text-sm text-neutral-500 max-h-[90px] overflow-hidden truncate'>{text}</p>
          </div>
          <div className='flex gap-2 text-xs text-neutral-400'>
            <p>{date}</p>
            <p>{time}</p>
          </div>
        </div>
      </Link>

      {/* Delete button  */}
      <DeleteButton handleDelete={handleDelete}/>
    </div>
  )
}

export default NoteCard