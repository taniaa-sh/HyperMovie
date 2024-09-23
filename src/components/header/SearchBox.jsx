import { useEffect, useState } from "react"

import axios from "axios";
import { Tv } from "./searchBox/items/Tv";
import { Person } from "./searchBox/items/Person";
import { Movie } from "./searchBox/items/Movie";

export function SearchBox(){
    const [query,setQuery]=useState('');
    const[searchResult,setSearchResult]=useState([])

    useEffect(()=>{
    const timeout = setTimeout(async() => {
       if(query){
        const {data} =await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=880a9210590406da01cad891498ce593&query=${query}`)
        console.log(data)
        setSearchResult(data.results)
    }    else{setSearchResult([])}  
    }, 500);
    return()=>{clearTimeout(timeout)}
    },[query])
    function showItem(item){
        switch(item.media_type){
            case 'tv' : return <Tv key={item.id} item={item}/>
            case 'person' : return <Person key={item.id} item={item}/>
            case 'movie' : return <Movie key={item.id} item={item}/>
        }

    }

    return(
        <section className="container mt-12 text-slate-200">
           <div className="relative">
           <input type="text" className="w-full bg-slate-600 text-2xl p-3 border-4 border-slate-900 rounded-md outline-none placeholder:text-slate-500 placeholder:text-base" placeholder="Search for a movie,Tv Show or celebrity that you are looking for"
           value={query} 
           onChange={e => setQuery(e.target.value)}
           />
         <div className={`bg-slate-600 p-2 flex flex-col gap-2  bg-opacity-95 border-4 border-slate-900 border-t-0 text-gray-800  absolute w-full z-10 rounded-md  transition-all duration-200
            ${searchResult.length && query ? 'max-h-[300px] overflow-auto':'h-0 overflow-hidden opacity-0'}`}>
                
                    {
                        searchResult.map((item)=>(
                       <div key={item.id} className="border-b-2 border-slate-700 border-opacity-30 pb-2git" onClick={()=>setSearchResult([])}>{showItem(item)}</div>
                        ))                  
                    }
               
                </div>
           <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white"  viewBox="0 0 16 16" className="hidden md:block absolute top-1/2 right-4 -translate-y-1/2 ">
           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
           </svg>
           </div>
          
            
        </section>
    )
}