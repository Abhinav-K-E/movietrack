import React from 'react'

const RightBox = ({movieData ,videos , gen}) => {

  return (
    <div className='right-box'>
      <div className='movie-title'>
        {movieData.title}
      </div>
      <div className='tabs-sm'>
        <div className='tab-sm'>
          <span style={{
            marginRight:'10px'
          }}>Release Date :</span> 
          {movieData.release_date}
        </div>
      </div>
      <a href={`https://www.youtube.com/watch?v=${videos[0]?.key}`} className='tabs'>
        <div  className='tab'>
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 256 256" id="play"><rect width="256" height="256" fill="none"></rect><path fill="" stroke="" rokeLinecap="round" strokeLinejoin="round" strokeWidth="10" d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z"></path></svg>
        </div>
        <div className='txt'>
          Play Trailer
        </div>
      </a>
      <div className='overview'>
        <h4>
          Overview :
        </h4>
        {movieData.overview}
      </div>
      <div className='tabs-xl'>
        {
          gen?.map((item)=>(
            <div className='tab-xl'>
            {item.name}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RightBox
