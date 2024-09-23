import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export const UserContext = createContext({});

export function UserProvider({children}){
    const navigate =useNavigate()
    const[user,setUser]=useState({});
    const[session,setSession]=useState(()=> localStorage.getItem("session"))
    async function getUserData() {
        const userResult = await axios.get(`https://api.themoviedb.org/3/account?api_key=880a9210590406da01cad891498ce593&session_id=${session}`)
        setUser(userResult.data)
    }

    useEffect(()=>{

        if(session){
           getUserData();
        }
    },[session])

    function logout(){
        Swal.fire({
            title:'Are you sure you want to log out?',
            message: 'You wont be able to revert this!',
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'Yes,Log me out!',
            cancelButtonText:'Cancle'
          }).then((result)=>{
            if(result.isConfirmed){
                setUser({});
                setSession(null);
                localStorage.clear();
                navigate('/');
                Swal.fire('Logged out!')
                
        }
          })
    };
  

async function login (username,password){
   try {
    const tokenResult =await axios.get('https://api.themoviedb.org/3/authentication/token/new?api_key=880a9210590406da01cad891498ce593')
    const  authorize =await axios.post('https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=880a9210590406da01cad891498ce593',{
        username,password,request_token :tokenResult.data.request_token
    })
    console.log(authorize)
    const session = await axios.post('https://api.themoviedb.org/3/authentication/session/new?api_key=880a9210590406da01cad891498ce593',{
        request_token:tokenResult.data.request_token
       })
      
       setSession(session.data.session_id)
       localStorage.setItem('session',session.data.session_id)
       navigate("/",{replace:true})
   } catch  {
    toast.error("invalid username and password")
   }
  
}


    return <UserContext.Provider value={{user,login,session,logout}}>{children}</UserContext.Provider>
}