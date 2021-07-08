import React,{useState,useEffect,useContext} from "react"; 
import Post from "../components/Post";

import {UserContext} from "../context/UserContext";

export default (props)=>{
    
    const {match,history} = props;
    const {id} = match.params;
    const {user,setUser} = useContext(UserContext);
    console.log(user);

    const [post,setPost] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    const [edit,setEdit] = useState(false);

    //Variable para actualizar post
    const [descripcion,setBody] = useState('');

        const fetchPost = async () => {
            const response = await fetch(`http://localhost:1337/posts/${id}`);
            const  data = await response.json();

            console.log("data",response);
            setPost(data);
            setBody(data.descripcion);
            setLoading(false);
            setError('');
  
        }
       
    const handleDelete = async() =>{
        const response = await fetch(`http://localhost:1337/posts/${id}`,{
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

        const response = await fetch(`http://localhost:1337/posts/${id}`,{
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
        fetchPost()
        console.log("Handle Submit",data);

    }

    useEffect(()=>{
    fetchPost()
    },[])


  


    return(
        <div className="SinglePost">
            {loading&&
                    <p>Loading....</p>

                
            }
            {!loading &&
            <>
                {post.id &&
                <>
                            <Post 
                            key={post.id}
                            title={post.Nombre} 
                            url={post.img_ppal && post.img_ppal.url} 
                            description={post.descripcion} 
                            creation_date={post.created_at}
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
                            <button>Actualizar este post</button>
                            </form>
                           }
                </>
                }
                {!post.id &&
                    <p>{error}</p>
                }

            </>
            }
        </div>
        )
    
}
