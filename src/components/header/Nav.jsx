import {  useContext, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { UserContext } from "../../context/UserContext"

export function Nav(){
    const[isOpenMenue,setIsOpenMenue]=useState(false)
    const {user,logout} = useContext(UserContext)





    function activeClass({isActive}){
return isActive ? "text-yellow-400": "hover:text-white"
    }
   
    return (
       <>
        <nav className=" flex items-baseline text-slate-300  bg-slate-900 p-4  md:container md:bg-transparent">
            <div className="flex items-baseline ">
               <Link  to={'/'}>
                <h1 className="text-3xl mr-12 text-white">
                    Hyper
                    <span className="text-yellow-500">Movies</span>
                    <p className="text-xs text-center text-slate-500 font-light">Film Review</p>
                </h1>
               </Link>
                <ul className="hidden md:flex text-sm lg:text-base gap-6 uppercase">
                <li><NavLink className={activeClass} to={"/movies"}>Movies</NavLink></li>
                <li><NavLink className={activeClass} to={"/tvshow"}>Tv shows</NavLink></li>
                <li><NavLink className={activeClass} to={"/people"}>people</NavLink></li>
                <li><NavLink className={activeClass} to={"/more"}>More</NavLink></li>
                </ul>
            </div>
            <div className="hidden md:block text-sm lg:text-base ml-auto uppercase">
               {
               Object.keys(user).length ?
               (
             <>
               <div>
                {user.name}
                <button onClick={logout} className="text-red-700 ml-4">LOGOUT</button>
                </div>
              
             </>
               ) 
               
               :
               (<ul className="flex gap-8">
                <li><NavLink  to="/login" className="text-white">Login</NavLink></li>
                <li><NavLink to="/signup" className="bg-green-500 hover:bg-green-400 px-6 py-2 rounded-xl text-white">Sign up</NavLink></li>
            </ul>)
               }
            </div>
            <div className="md:hidden ml-auto">
                <button onClick={()=>setIsOpenMenue(!isOpenMenue)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"  viewBox="0 0 16 16">
                <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>
            </div>

        </nav>
        <div className={`md:hidden bg-slate-900 text-center overflow-hidden transition-all duration-200 text-slate-300 ${isOpenMenue ? 'h-full py-4 border-t-2 border-slate-700': 'py-0  border-none'}`}
        style={{height: isOpenMenue ? 310 : 0}}
        >
            <ul className="flex flex-col gap-4">
                <li><NavLink onClick={()=>setIsOpenMenue(false)} className={activeClass} to={"/movies"}>MOVIES</NavLink></li>
                <li><NavLink onClick={()=>setIsOpenMenue(false)} className={activeClass} to={"/tvshow"}>TV SHOWS</NavLink></li>
                <li><NavLink onClick={()=>setIsOpenMenue(false)} className={activeClass} to={"/people"}>PEOPLE</NavLink></li>
                <li><NavLink onClick={()=>setIsOpenMenue(false)} className={activeClass} to={"/more"}>MORE</NavLink></li>
            </ul>
            <div className="mt-8 flex gap-4 justify-center items-center border-t-2 pt-4 border-slate-700">
                <a href="#" className="text-xl ">Login</a>
                <a href="#" className="bg-rose-600 rounded-xl py-2 px-4 text-white ">Sign Up</a>
            </div>
        </div>
        </>
    )
}