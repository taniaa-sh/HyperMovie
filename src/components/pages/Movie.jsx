import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { UserContext } from "../../context/UserContext";
import toast from "react-hot-toast";

export function Movie(){
    const [movie,setMovie]=useState("")
    const {id} = useParams();
    const {user,session}=useContext(UserContext);

   async function handleAdd(){
     const result = await axios.post(`https://api.themoviedb.org/3/account/${user.id}/favorite?api_key=880a9210590406da01cad891498ce593&session_id=${session}`,{
      media_type :'movie',
      media_id: movie.id,
      favorite :true
     })
     toast.success(`${movie.title} add to your favorites`)
     console.log(result)
    }

    async function loadMovie(){
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=880a9210590406da01cad891498ce593`)
        setMovie(data)
    }
    useEffect(()=>{
       loadMovie()
    },[id]);
    return (
      <div>
        {
            movie ? 
            (<div>
              <h1>{movie.title}</h1>
              <img src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}/>
              <button className="p-2 bg-blue-600 text-white my-6 mx-6" onClick={handleAdd}>Add to watch list</button>
              </div>)
               : 
               (<h1>is loading...</h1>)
        }
      </div>
    )
}