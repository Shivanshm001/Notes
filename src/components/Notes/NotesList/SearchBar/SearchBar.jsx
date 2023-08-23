import React from 'react'
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { BiSearch } from 'react-icons/bi';




const SearchBar = () => {
    const [search, setSearch] = useState("");

    function handleSearch(e) {
        e.preventDefault();
        console.log("Searching...");
        console.log(allNotes.size)
    }


    return (

        <form className='w-full bg-gray-300 flex p-1 px-2 items-center justify-center rounded-full' autoComplete='off' onSubmit={handleSearch}>
            <div>
                <button className='pt-2'>
                    <IconContext.Provider value={{ className: "text-lg text-neutral-500" }}>
                        <BiSearch />
                    </IconContext.Provider>
                </button>
            </div>

            <div className='w-full'>
                <input type="text" name="search" id="search" placeholder='Search'
                    className='placeholder:text-neutral-500 bg-transparent outline-none w-full px-2 py-1 text-sm font-semibold tracking-wide' />
            </div>
        </form>

    )
}

export default SearchBar