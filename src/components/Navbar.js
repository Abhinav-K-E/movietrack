import React, { useState } from 'react'

const Navbar = ({search , setSearch}) => {

  const [dummy , setDummy] =useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    setSearch(dummy);
    // console.log(search);
  }

  return (
    <div className='nav'>
      <div className='logo'>
        MovieTrack
      </div>
      <form onSubmit={handleSubmit}>
        <input placeholder='Ex : Avengers' name='movie' type='text' value={dummy} onChange={(e) =>setDummy(e.target.value)}/>
        <button className='search' type='submit'>
            Search
        </button>
      </form>
    </div>
  )
}

export default Navbar
