import React,{useState,useEffect} from "react"; 
import {Link} from "react-router-dom";
import Post from "../components/Post";
import Hero from "../components/Layout/Home/Hero";
import AboutHome from "../components/Layout/Home/AboutHome";
import ValueAddedhome from "../components/Layout/Home/ValueAddedhome";
import VideoHome from "../components/Layout/Home/VideoHome";
import NavigationMain from "../components/Layout/Navigations/NavigationMain";

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
            <>
                <NavigationMain />
                <Hero/>
                <AboutHome/>
                <ValueAddedhome />
                <VideoHome />
            </>
    );
}

/*
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
*/ 