import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';

export function DeleteButton({ handleDelete }) {
    return (
        <div>
            <button className='border rounded border-gray-200 bg-transparent  text-lg' title='Delete' onClick={handleDelete}>
                <AiOutlineDelete />
            </button>
        </div>
    );
}
