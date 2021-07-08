import React,{useState,useEffect,useContext} from "react"; 
import Post from "../components/Post";

import {UserContext} from "../context/UserContext";

export default ()=>{
    
    const [descripcion,setBody] = useState('');
    const [files,setFile] = useState(null);
    const[error,setError] = useState('');

    const formData = new FormData();
    formData.append('data', JSON.stringify({descripcion}));
    formData.append('files.img_ppal', files);

    const {user,setUser} = useContext(UserContext); 
    
    const handleSubmit = async (event) =>{
        event.preventDefault();

        if(!user){
            setError("Debes iniciar sesión");
            return;
        }

        if (!descripcion) {
            setError("Escribe contenido para el post");
            return;
        }

        if(!files){
            setError("Agrega un archivo para el post");
            return;
        }

/*
            header:{
                'Content-Type': 'application/json'
            },
*/ try{
        const response = await fetch('http://localhost:1337/posts',{
            method:'POST',
            headers:{
                'Authorization': `Bearer ${user.jwt}`
            },
            body: formData
        })
        const data = await response.json();
        console.log("Nuevo post",data);
    

    }catch(err){
        console.log("Exception",err);
        setError(err);
    }
    
    }
    

    return(
        <div className="Create">
                Create
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Description" 
                        value={descripcion}
                        onChange={(event) => {
                            setError('')
                            setBody(event.target.value)
                        }}
                    />
                    <input
                        type="file"
                        placeholder="Add a File"
                        name="files"
                        onChange={(event) =>  {
                            setError('')
                            setFile(event.target.files[0])
                        }}    
                    />
                    <button>Enviar</button>
                </form>
        </div>
        )
    
}
