import React,{useState,useEffect,useContext} from "react"; 
import {NavLink} from "react-router-dom";
import {UserContext} from "../../../context/UserContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default ()=>{
    
    const {user} =useContext(UserContext);



    return(
        <div className="Nav">
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><NavLink to="/" exact-></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                <Nav className="me-auto">
                    {!user &&
                    <>
                    <Nav.Link href="#plataform"><NavLink to="/" exact>Plataform</NavLink></Nav.Link>
                    <Nav.Link href="#signup"><NavLink to="/signup" exact>signUp</NavLink></Nav.Link>                   
                    <Nav.Link href="#login"><NavLink to="/login" exact>LogIn</NavLink></Nav.Link>
                    <Nav.Link href="#contact"><NavLink to="/contact" exact>Contact</NavLink></Nav.Link>
                    </>
                    }

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        )
    
}


/*
         {user &&
                    <>
                    <Nav.Link href="#dashboards"><NavLink to="/dashboard" exact>Dashboard</NavLink></Nav.Link>
                    <Nav.Link href="#oportunities"><NavLink to="/opportunities" exact>Oportunities</NavLink></Nav.Link>
                    <Nav.Link href="#catalogs"><NavLink to="/catalogs" exact>Catalogs</NavLink></Nav.Link>
                    <Nav.Link href="#exhibits"><NavLink to="/exhibits" exact>Exhibits</NavLink></Nav.Link>
                    <Nav.Link href="#contact"><NavLink to="/contact" exact>Contact</NavLink></Nav.Link>
                    </>
                    }
*/ 