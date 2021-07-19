import React,{useState,useEffect,useContext} from "react"; 
import Variedad from "../../../components/Variedad";

import {UserContext} from "../../../context/UserContext";


export default (props)=>{
    
    const {match,history} = props;
    const {id} = match.params;

    const {user,setUser} = useContext(UserContext);
    console.log(id);

    const [variedad,setVariedad] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    const [edit,setEdit] = useState(false);

    //Variable para actualizar post
    const [descripcion,setBody] = useState('');

        const fetchVariedad = async () => {
            const response = await fetch(`http://localhost:1337/variedads/${id}`);
            const  data = await response.json();

            console.log("data",response);
            setVariedad(data);
            setBody(data.description);
            setLoading(false);
            setError('');
  
        }
       
    const handleDelete = async() =>{
        const response = await fetch(`http://localhost:1337/variedads/${id}`,{
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

        const response = await fetch(`http://localhost:1337/variedads/${id}`,{
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
        fetchVariedad()
        console.log("Handle Submit",data);

    }


    useEffect(()=>{
        fetchVariedad()
    },[])


  


    return(
        <div className="ShowCuadro">
            {loading&&
                    <p>Loading....</p>

                
            }
            {!loading &&
            <>
                {variedad.id &&
                <>
                        <Variedad 
                            key={variedad.id}
                            title={variedad.nombre} 
                            description={variedad.slug} 
                            creation_date={variedad.created_at}
                            status={variedad.status}
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
                {!variedad.id &&
                    <p>ERROR</p>
                }

            </>
            }
        </div>
        )
    
}
