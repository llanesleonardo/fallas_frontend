import React,{createContext,useState, useEffect, useContext} from "react";
import {UserContext} from "./UserContext";

export const LikesContext = createContext(null);


export default ({children}) =>{

    const {user} = useContext(UserContext);
    const [likesGiven,setLikesGiven] = useState(null);
    const [likesRecieved,setLikesRecieved] = useState(null);


    const reloader = async () =>{
        if(user){
            const loadLikesGiven = async () =>{
                const response = await fetch(`http://localhost:1337/likes/given?user=${user.user.id}`,{
                    headers:{
                        'Authorization':`Bearer ${user.jwt}`
                    }
                });

                const data = await response.json();
                setLikesGiven(data);
            }
            loadLikesGiven();

            const loadLikesRecieved = async () =>{
                const response = await fetch(`http://localhost:1337/likes/recieved?post.author=${user.user.id}`,{
                    headers:{
                        'Authorization':`Bearer ${user.jwt}`
                    }
                });

                const data = await response.json();
                setLikesRecieved(data);
            }

            loadLikesRecieved();
        }
    }

    useEffect(()=>{
         reloader();
    },[user])

    console.log("LikesGiven",likesGiven);
    console.log("LikesRecieved",likesRecieved);

    return(
            <LikesContext.Provider  value={{likesGiven,likesRecieved, reloader}}>
                 {children}
            </LikesContext.Provider>
    )
}