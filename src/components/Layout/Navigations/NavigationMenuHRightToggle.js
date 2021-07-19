import React,{useState,useEffect} from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import { BsGrid1X2Fill,BsFolderFill,BsFillBarChartFill,BsFillXDiamondFill } from  "react-icons/bs";
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';


export default ()=>{

  return (
 
            <>
            <Dropdown>
             <Dropdown.Toggle id="dropdown-basic" className="items_blue">
                <BsFillXDiamondFill  style={{color:"white"}} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/">Action</Dropdown.Item>
                <Dropdown.Item href="/contact">Another action</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>                
            </>
    );
}
