import React,{useState,useEffect,useContext} from "react"; 
import {NavLink} from "react-router-dom";
import {UserContext} from "../context/UserContext";
export default ()=>{
    
    const {user} =useContext(UserContext);



    return(
        <div className="Nav">
            <NavLink to="/" exact>Inicio</NavLink>
            {user &&
            <NavLink to="/create" exact>Create Post</NavLink>           
            }
            {!user &&
            <>
            <NavLink to="/login" exact>LogIn</NavLink>
            <NavLink to="/signup" exact>signUp</NavLink>
            </>
            }
        </div>
        )
    
}
