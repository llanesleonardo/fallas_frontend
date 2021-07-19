import React,{useState,useEffect,useContext} from "react";
import {UserContext} from "../context/UserContext";
import NavigationMain from "../components/Layout/Navigations/NavigationMain";
import LogInForm from "../components/Layout/LogIn/LogInForm";


export default ({history}) =>{
    
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [error,setError] = useState('');

    const {user,setUser} = useContext(UserContext);

    useEffect (()=>{
        if (user) {
            history.push('/dashboard')
        }
    },[user])

    const handleLogInSubmit = async (event) =>{
        event.preventDefault();
try{
        const response = await fetch('http://localhost:1337/auth/local',
        {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                identifier:email,
                password:pass
            })
        })

        const data = await response.json();

        if (data.message) {
            setError(data.message[0].messages[0].message);
            return //Stop Execution
        }
        console.log("LogIn Data",data);

        setUser(data);

        } catch(err){
            setError("Algo paso mal" + err);
        }

       
    }
    return(
        <>
            <NavigationMain />  
            <LogInForm 
                handleLogInSubmit={handleLogInSubmit} 
                email={email}  
                pass={pass}  
                setError={setError} 
                setEmail={setEmail}
                setPass={setPass}
                error={error}
            />
        </>
    )

}
