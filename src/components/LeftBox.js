import React from 'react'

const LeftBox = ({movieData}) => {
  return (
    <div className='left-box'>
        <img className='movie-image' src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`} />
        <a href={movieData.homepage} className='link-card'>
            {'Watch Now'}
        </a>
    </div>
  )
}

export default LeftBox
