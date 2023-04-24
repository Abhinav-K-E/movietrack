import React from 'react'

import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

const Upcoming = ({apiKey}) => {

  const [movieData , setMovieData] = useState([]);

  useEffect(() =>{
    const fetchData = async() =>{
      const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`);
      const data = await response.json();

      setMovieData(data.results);
    }
    fetchData();
  } ,[])

  //console.log(movieData)

  return (
    <section className='sections'>
      <h2>
        Upcoming Movies
      </h2>
      <div className='cards-row'>
        {
          movieData.map((item)=>(
            <Link to={`/${item.id}` } className='card' key={item.id}>
              <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} className='mov-img'/>
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
        }
      </div>
    </section>
  )
}

export default Upcoming
