import React,{useState,useEffect} from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Post from "../components/Post";

export default ()=>{


    const [posts,setPosts] = useState([]);

    useEffect(()=>{
      const getPost = async ()=>{
      const response = await fetch('http://localhost:1337/posts');
      const data = await response.json();
      setPosts(data);
      }
  
      getPost();
  
    },[]);
  
  
    return (
        <div className="Home">
        <Container className="post_centrado">
            <Row>
                    {posts.map(post =>(
                    <Link
                        to={`/${post.id}`}
                    >
                        <Post 
                        key={post.id}
                        title={post.Nombre} 
                        url={post.img_ppal && post.img_ppal.url} 
                        description={post.descripcion} 
                        creation_date={post.created_at}
                        />
                    </Link>
                    ))}
            </Row>
            </Container>
        </div>
    );
}