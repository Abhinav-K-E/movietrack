import React, { useState } from 'react'
import Navbar from '../components/Navbar'

import Trending from '../components/Trending'
import Upcoming from '../components/Upcoming'
import TopRated from '../components/TopRated'
import Search from '../components/Search'
const Home = () => {

  const apiKey = process.env.REACT_APP_API_KEY;

  const [search , setSearch] = useState('');
  return (
    <div>
      <Navbar search={search} setSearch={setSearch} apiKey={apiKey}/>
      <Search search={search} setSearch={setSearch} apiKey={apiKey}/>
      <Trending apiKey={apiKey}/>
      <Upcoming apiKey={apiKey}/>
      <TopRated apiKey={apiKey}/>
    </div>
  )
}

export default Home
