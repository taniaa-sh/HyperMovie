
import { useState } from 'react';
import { FollowUs } from './FollowUs';
import HeaderSlider from './HeaderSlider';
import { Nav } from './Nav';
import { SearchBox } from './SearchBox';
import { useLocation } from 'react-router-dom';


export function Header(){
  const location = useLocation()
    const[bg,setBg]=useState("/cinema.jpg")
    return (
       <header className={` transition-all bg-cover bg-center duration-500 pb-8 md:py-8 ${location.pathname !== "/" ? 'h-[600px]' : ''}`} style={{backgroundImage: `linear-gradient(to bottom,rgb(30 41 59 / 100%), rgb(30 41 59 / 60%) , rgb(30 41 59 / 30%)), url(${bg})`}}>
         <Nav/>
        <div className='container '>
       
        <SearchBox/>
        {
          location.pathname === "/" && (
            <div className={`${location.pathname !== "/"  ? 'hidden ' : ''}`}>
            <FollowUs/>
            <HeaderSlider setBg={setBg}/>
            </div>
          )
        }
        </div>
       </header>
    )
}