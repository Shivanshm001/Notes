import React from 'react'
import { GrAdd } from 'react-icons/gr';

const InfoBar = ({ date, time, text }) => {
    return (
        <div className='flex gap-2 justify-between items-baseline'>
            <div className='flex gap-2 items-center justify-center'>
                <p className='text-xs text-neutral-500 flex gap-2'>
                    <span>{date}</span>
                    <span>{time}</span>
                </p>
                {/* Empty span is used for gray vertical bar  */}
                <span className='font-extralight'>|</span>
                <p className='text-xs text-neutral-500'>{text ? text.length : "0"} characters</p>

            </div>
            {/* <div>
                <button type='button' className='border border-gray-400 rounded p-1 bg-gray-200 active:scale-90 '><GrAdd /></button>
            </div> */}
        </div>
    )
}

export default InfoBar