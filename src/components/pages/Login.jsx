import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export function Login (){
const {login}=useContext(UserContext)

    function handleLogin(e){
        e.preventDefault();
        const{username , password}=e.target.elements;
        login(username.value,password.value)
    }
    return(
        <div className="flex flex-col justify-center items-center text-black ">
            <form action="" onSubmit={handleLogin} className="flex flex-col gap-8 my-14">
                <input placeholder="user" type="text" name="username"/>
                <input placeholder="pass" type="password" name="password"/>
                <input type="submit" value={"login"} className="text-white bg-green-500 hover:bg-green-400 w-20 ml-12 rounded-md"/>

            </form>
        </div>
    );
}