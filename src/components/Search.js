import React from 'react'

import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

const Search = ({search , setSearch , apiKey}) => {

  const [loading , setLoading] = useState();
  //console.log(search);
  const [movieData , setMovieData] = useState([]);

    useEffect(() =>{
      setLoading(false)
      const fetchData = async() =>{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`);
        const data = await response.json();
        
        setMovieData(data.results);
        setLoading(true);
      }
      fetchData();
    } ,[search])
  
    console.log(movieData)
    console.log(loading)
  
    return (
      <section className='sections'>
        <div className='cards-row'>
          {
          (loading)?(
            movieData.map((item)=>(
              <Link to={`/${item.id}`} className='card' key={item.id}>
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} className='mov-img'/>
                <div className='detail'>
                  <div className='mov-name'>{item.title || item.name}</div>
                  <div className='group'>
                    <div className='mov-date'>{item.release_date || item.first_air_date}</div>
                    <div>
                      <label className='rate'>Rating : {(item.vote_average).toFixed(1)} 🌟</label>
                     </div> 
                  </div>
                </div>
              </Link>
            ))
          ):'Loading'
          }
        </div>
      </section>
    )
}

export default Search
