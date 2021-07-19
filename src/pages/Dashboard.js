import React,{useState,useEffect} from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import Post from "../components/Post";
import { BsGrid1X2Fill,BsFolderFill,BsFillBarChartFill,BsFillXDiamondFill } from  "react-icons/bs";
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import MenuLogo from "../components/Layout/Dashboard/Menu_Logo";
import MenuList from "../components/Layout/Dashboard/Menu_List";
import MenuTool from "../components/Layout/Dashboard/Menu_Tool";
import SearchDashboard from "../components/Layout/Dashboard/SearchDashboard";
import MainTitle from "../components/Layout/MainTitle";
import MenuProfile from "../components/Layout/Dashboard/Menu_Profile";

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
        <div className="Dashboard">
            <Row>
                    <Col className="col_dashboard p-0">
                        <div className="menu_h_dashboard">
                            <div className="menhu_h_tool">
                                <div class="menu_h_left d-flex align-items-end flex-column">
                                    <div class="p-2">
                                        <MenuLogo />
                                    </div>
                                    <div class="p-2">
                                        <MenuList />
                                    </div>
                                    <div class="mt-auto p-5 mb-5">
                                        <MenuTool />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={8} className="col_dashboard p-0">
                        <div className="content_h_dashboard">
                            <SearchDashboard />
                            <MainTitle title="Dashboard"/>
                             <div className="mx-auto d-block text-center">
                            <div className="p-5 mx-5" style={{backgroundColor:"white"}}>
                                    <p className="text-center">!Aún no tienes ningun documento!</p>
                                    <br/>
                                    <Button variant="primary">Nuevo Proyecto</Button>
                            </div>
                        </div>  
                        </div>    
                    </Col>
                    <Col className="col_dashboard p-0">
                        <div className="secondary_h_dashboard">
                            <MenuProfile />
                        </div>
                    </Col>
            </Row>
        </div>
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


                                              <div className="menu_h_logo">
                            <Image 
                                className="img_col_iguales mx-auto d-block py-5" 
                                src="https://img-authors.flaticon.com/google.jpg" 
                                rounded 
                            />
                            </div>
                            <div className="center_h_menu">
                            <ul className="menu_h_list_dashboard">
                                <li>
                                    <div className="div_link_wrapper py-3 pl-5" >
                                        <BsGrid1X2Fill style={{color:"white"}}/>  
                                            <Link className="menu-h-dasboard">  
                                                Opportunities
                                             </Link>
                                    </div>
                                </li>
                                <li> 
                                <div className="div_link_wrapper py-3 pl-5" >
                                <BsFolderFill  style={{color:"white"}} /> 
                                            <Link className="menu-h-dasboard">  
                                                Catalogs
                                             </Link>
                                    </div>
                                </li>
                                <li>
                                <div className="div_link_wrapper py-3 pl-5" >
                                <BsFillBarChartFill  style={{color:"white"}} />
                                  <Link className="menu-h-dasboard">
                                      Exhibits
                                    </Link>
                                    </div>
                                </li>
                            </ul>
                            </div>
*/ 