import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';

const DeleteButton = ({ handleDelete }) => {
    return (
        <div>
            <button className='border rounded border-gray-200  text-lg' title='Delete' onClick={handleDelete}>
                <AiOutlineDelete />
            </button>
        </div>
    )
}

export default DeleteButton