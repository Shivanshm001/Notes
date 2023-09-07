import React from "react";

import { Link } from "react-router-dom";

import { AiOutlineEdit } from 'react-icons/ai';
import { IconContext } from 'react-icons';



export function EditButton({ id }) {
    return <Link to={`/tasks/edit/${id}`} title='Edit'>
        <IconContext.Provider value={{ className: "border rounded border-gray-200  text-xl" }}>
            <AiOutlineEdit />
        </IconContext.Provider>
    </Link>;
}