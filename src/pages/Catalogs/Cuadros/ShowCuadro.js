import React,{useState,useEffect,useContext} from "react"; 
import Cuadro from "../../../components/Cuadro";

import {UserContext} from "../../../context/UserContext";


export default (props)=>{
    
    const {match,history} = props;
    const {id} = match.params;

    const {user,setUser} = useContext(UserContext);
    console.log(id);

    const [cuadro,setCuadro] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    const [edit,setEdit] = useState(false);

    //Variable para actualizar post
    const [descripcion,setBody] = useState('');

        const fetchCuadro = async () => {
            const response = await fetch(`http://localhost:1337/cuadros/${id}`);
            const  data = await response.json();

            console.log("data",response);
            setCuadro(data);
            setBody(data.description);
            setLoading(false);
            setError('');
  
        }
       
    const handleDelete = async() =>{
        const response = await fetch(`http://localhost:1337/cuadros/${id}`,{
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

        const response = await fetch(`http://localhost:1337/cuadros/${id}`,{
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
        fetchCuadro()
        console.log("Handle Submit",data);

    }


    useEffect(()=>{
        fetchCuadro()
    },[])


  


    return(
        <div className="ShowCuadro">
            {loading&&
                    <p>Loading....</p>

                
            }
            {!loading &&
            <>
                {cuadro.id &&
                <>
                        <Cuadro 
                            key={cuadro.id}
                            title={cuadro.nombre} 
                            description={cuadro.slug} 
                            creation_date={cuadro.created_at}
                            status={cuadro.status}
                            numerocuadro={cuadro.numero_de_cuadro}
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
                {!cuadro.id &&
                    <p>ERROR</p>
                }

            </>
            }
        </div>
        )
    
}
