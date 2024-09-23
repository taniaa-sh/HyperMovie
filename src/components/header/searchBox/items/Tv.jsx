import { Link } from "react-router-dom";
import { imgUrl } from "../../../../helpers/imgurl";

export function Tv ({item}){
    return(
        <Link to={`/tv/${item.id}`}>
        <div className="flex gap-3 items-center text-lg">
    <img  className="object-cover w-11 h-11 rounded-md" src={item.poster_path ? imgUrl(item.poster_path,'w92') : "/public/movie.png"}/>
    <p >{item.name}</p>
</div></Link>
    )
}