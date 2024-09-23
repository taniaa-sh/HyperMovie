
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import { Autoplay } from 'swiper/modules';
import { MovieCard } from '../movies/MovieCard';
import { useEffect, useState } from 'react';
import axios from 'axios';


function HeaderSlider({setBg}){
const [movies,setMovies]=useState([]);
async function loudMovies() {
  const {data}=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=880a9210590406da01cad891498ce593')
setMovies(data.results)
}
useEffect(()=>{
loudMovies()
},[])



  
    return(
       <div className='mt-8'>
         <Swiper
         breakpoints={{
          640:{
            slidesPerView:2,
            spaceBetween:20,
          },
          768:{
            slidesPerView:3,
            spaceBetween:30,
          },
          1024:{
            slidesPerView:4,
            spaceBetween:40,
          },
         }}
         modules={[Autoplay]}
        autoplay={{delay:2000}}
        loop
        
      >
     {
      movies.map((movie)=>(
        <SwiperSlide key={movie.id}>
          <div onMouseOver={()=>setBg(`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`)}>
            <MovieCard
            movie={movie}
            />
          </div>
        </SwiperSlide>
      ))
     }
        
       
        </Swiper>
       </div>
    )
}

export default HeaderSlider;