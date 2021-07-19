import React from "react"; 
import {NavLink} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


export default ()=>{

    return(
            <Nav className="justify-content-center">
                <Nav.Item className="p-5">
                    <NavLink to="/contact">Contact</NavLink>
                </Nav.Item>
                 <Nav.Item className="p-5">
                    <NavLink to="/contact">Políticas del software</NavLink>
                </Nav.Item>
                <Nav.Item className="p-5">
                     <NavLink to="/contact">Preguntas frecuentes</NavLink>
                 </Nav.Item>
            </Nav>

        )
    
}

