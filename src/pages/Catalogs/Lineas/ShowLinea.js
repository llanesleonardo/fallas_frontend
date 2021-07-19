import React,{useState,useEffect,useContext} from "react"; 
import Linea from "../../../components/Linea";

import {UserContext} from "../../../context/UserContext";


export default (props)=>{
    
    const {match,history} = props;
    const {id} = match.params;

    const {user,setUser} = useContext(UserContext);
    console.log(id);

    const [linea,setLinea] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    const [edit,setEdit] = useState(false);

    //Variable para actualizar post
    const [descripcion,setBody] = useState('');

        const fetchLinea = async () => {
            const response = await fetch(`http://localhost:1337/lineas/${id}`);
            const  data = await response.json();

            console.log("data",response);
            setLinea(data);
            setBody(data.description);
            setLoading(false);
            setError('');
  
        }
       
    const handleDelete = async() =>{
        const response = await fetch(`http://localhost:1337/lineas/${id}`,{
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

        const response = await fetch(`http://localhost:1337/lineas/${id}`,{
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
        fetchLinea()
        console.log("Handle Submit",data);

    }


    useEffect(()=>{
        fetchLinea()
    },[])


  


    return(
        <div className="ShowCuadro">
            {loading&&
                    <p>Loading....</p>

                
            }
            {!loading &&
            <>
                {linea.id &&
                <>
                        <Linea 
                            key={linea.id}
                            title={linea.nombre} 
                            description={linea.slug} 
                            creation_date={linea.created_at}
                            status={linea.status}
                        />

                            {user &&
                                <>
                            <button
                                onClick={handleDelete}
                            >Borrar este registro</button>
                            <button
                                onClick={()=>setEdit(true)}
                            >Editar este registro</button>
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
                {!linea.id &&
                    <p>ERROR</p>
                }

            </>
            }
        </div>
        )
    
}
