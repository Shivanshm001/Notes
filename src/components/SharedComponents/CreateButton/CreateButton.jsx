import React from 'react'
import { GrAdd } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const CreateButton = ({type}) => {
    return <Link to={`/${type}/create`} className='fixed bottom-8 right-8 rounded-full overflow-hidden'>
        <button className='bg-yellow-400 p-4 rounded-full text-lg font-bold'>
            <GrAdd />
        </button>
    </Link>
}

export default CreateButton;