import React,{useState,useEffect,useContext} from "react"; 
import Campo from "../../../components/Campo";

import {UserContext} from "../../../context/UserContext";


export default (props)=>{
    
    const {match,history} = props;
    const {id} = match.params;

    const {user,setUser} = useContext(UserContext);
    console.log(id);

    const [campo,setCampo] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    const [edit,setEdit] = useState(false);

    //Variable para actualizar post
    const [descripcion,setBody] = useState('');

        const fetchCampo = async () => {
            const response = await fetch(`http://localhost:1337/campos/${id}`);
            const  data = await response.json();

            console.log("data",response);
            setCampo(data);
            setBody(data.description);
            setLoading(false);
            setError('');
  
        }
       
    const handleDelete = async() =>{
        const response = await fetch(`http://localhost:1337/campos/${id}`,{
            method:'DELETE',
            headers:{
                'Authorization':`Bearer ${user.jwt}`
            },
        });
        const  data = await response.json();
        history.push("/");

    }

    const handleEditSubmit = async (event) =>{
        event.preventDefault();

        const response = await fetch(`http://localhost:1337/campos/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${user.jwt}`
            },
            body:JSON.stringify({
                descripcion
            })
        });
        const  data = await response.json();
        fetchCampo()
        console.log("Handle Submit",data);

    }


    useEffect(()=>{
        fetchCampo()
    },[])


  


    return(
        <div className="ShowCampo">
            {loading&&
                    <p>Loading....</p>

                
            }
            {!loading &&
            <>
                {campo.id &&
                <>
                        <Campo 
                            key={campo.id}
                            title={campo.nombre} 
                            description={campo.slug} 
                            creation_date={campo.created_at}
                            status={campo.status}
                        />

                            {user &&
                                <>
                            <button
                                onClick={handleDelete}
                            >Borrar este post</button>
                            <button
                                onClick={()=>setEdit(true)}
                            >Editar este post</button>
                                </>
                            }
                           {edit &&
                            <form onSubmit={handleEditSubmit}>
                            
                                <input 
                                    value={descripcion}
                                    onChange={(event) =>setBody(event.target.value)}
                                    placeholder="Nuevo contenido"
                                />      
                            <button>Actualizar este registro</button>
                            </form>
                           }
                </>
                }
                {!campo.id &&
                    <p>ERROR</p>
                }

            </>
            }
        </div>
        )
    
}
