import axios from "axios";

const session_id = localStorage.getItem('session');
export const fench = axios.create({
    baseURL : " https://api.themoviedb.org/3/",
    params :{
        api_key :'880a9210590406da01cad891498ce593',
        
    }
})
console.log(session_id)
window.fench = fench;