import React from "react"; 
import {NavLink} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { BsGrid1X2Fill,BsFolderFill,BsFillBarChartFill,BsFillXDiamondFill } from  "react-icons/bs";

export default ()=>{

    return(
            <Nav className="justify-content-center">
                <Nav.Item className="div_link_wrapper p-1 pl-5  ">
                <BsGrid1X2Fill style={{color:"white"}}/>  
                    <NavLink className="menu-h-dasboard" to="/dashboard">Dashboard</NavLink>
                </Nav.Item>
                <Nav.Item className="div_link_wrapper p-1 pl-5  ">
                <BsGrid1X2Fill style={{color:"white"}}/>  
                    <NavLink className="menu-h-dasboard" to="/contact">Opportunities</NavLink>
                </Nav.Item>
                 <Nav.Item className="div_link_wrapper p-1 pl-5">
                 <BsFolderFill  style={{color:"white"}} /> 
                    <NavLink  className="menu-h-dasboard" to="/catalogs">Catalogs</NavLink>
                </Nav.Item>
                <Nav.Item className="div_link_wrapper p-1 pl-5">
                <BsFillBarChartFill  style={{color:"white"}} />
                     <NavLink  className="menu-h-dasboard" to="/contact">Exhibits</NavLink>
                 </Nav.Item>
            </Nav>

        )
    
}

