import React,{useState,useEffect,useContext} from "react"; 
import Post from "../components/Post";

import {UserContext} from "../context/UserContext";
import {LikesContext} from "../context/LikesContext";

export default (props)=>{
    
    const {match,history} = props;
    const {id} = match.params;

    const {user,setUser} = useContext(UserContext);
    const {likesGiven,setLikesGiven, reloader} = useContext(LikesContext);
    console.log(user);

    const isPostAlreadyLiked =( () => {
        return likesGiven && likesGiven.find(like => like.post && like.post.id == id)
    })()


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

    const handleLike = async () =>{
        try {
            
            const response = await fetch("http://localhost:1337/likes",{
                method:"POST",
                headers:{
                    'Authorization':`Bearer ${user.jwt}`,
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    post:parseInt(id)
                })
            })

            fetchPost();
            reloader();

        } catch (error) {
            
            console.log("Exception", error);
        }
    }

    const handleRemoveLike = async () =>{
        try {
            
            const response = await fetch(`http://localhost:1337/likes/${id}`,{
                method:"DELETE",
                headers:{
                    'Authorization':`Bearer ${user.jwt}`,
                    'Content-type':'application/json'
                }
            })

            fetchPost();
            reloader();
        } catch (error) {
            
            console.log("Exception", error);
        }
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
                            likes={post.likes}
                            />
                            {user &&
                                <>
                                {isPostAlreadyLiked&& 
                                     <button onClick={handleRemoveLike}>Remove Like</button>
                                }
                                {!isPostAlreadyLiked&& 
                                   <button onClick={handleLike}>Like</button>
                                }
                                </>
                            }
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
