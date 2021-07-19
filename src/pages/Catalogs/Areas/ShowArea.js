import React,{useState,useEffect,useContext} from "react"; 
import Area from "../../../components/Area";

import {UserContext} from "../../../context/UserContext";


export default (props)=>{
    
    const {match,history} = props;
    const {id} = match.params;

    const {user,setUser} = useContext(UserContext);
    console.log(id);

    const [area,setArea] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    const [edit,setEdit] = useState(false);

    //Variable para actualizar post
    const [descripcion,setBody] = useState('');

        const fetchArea = async () => {
            const response = await fetch(`http://localhost:1337/areas/${id}`);
            const  data = await response.json();

            console.log("data",response);
            setArea(data);
            setBody(data.description);
            setLoading(false);
            setError('');
  
        }
       
    const handleDelete = async() =>{
        const response = await fetch(`http://localhost:1337/areas/${id}`,{
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

        const response = await fetch(`http://localhost:1337/areas/${id}`,{
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
        fetchArea()
        console.log("Handle Submit",data);

    }


    useEffect(()=>{
        fetchArea()
    },[])


  


    return(
        <div className="ShowCuadro">
            {loading&&
                    <p>Loading....</p>

                
            }
            {!loading &&
            <>
                {area.id &&
                <>
                        <Area 
                            key={area.id}
                            title={area.nombre} 
                            description={area.slug} 
                            creation_date={area.created_at}
                            status={area.status}
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
                {!area.id &&
                    <p>ERROR</p>
                }

            </>
            }
        </div>
        )
    
}
