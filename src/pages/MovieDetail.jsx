import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LeftBox from '../components/LeftBox';
import RightBox from '../components/RightBox'

const MovieDetail = () => {

  let movieId = useParams().id;
  //console.log(movieId);

  const apiKey = process.env.REACT_APP_API_KEY;

  const [movieData , setMovieData] = useState([]);
  const [videos , setVideos] =useState([]);
  const [gen , setGen] =useState([]);

  useEffect(() =>{
    const fetchData = async() =>{
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`);
      const data = await response.json();

      setMovieData(data);
      setVideos(data.videos.results);
      setGen(data.genres);
    }
    fetchData();
  } ,[])

  // console.log(movieData)
  // console.log(videos);
  // console.log(gen);

  return (
    <div className='movie-wrapper'>
      <LeftBox movieData={movieData} />
      <RightBox  movieData={movieData} videos={videos} gen={gen} />
    </div>
  )
}

export default MovieDetail
