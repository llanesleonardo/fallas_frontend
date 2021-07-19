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
                <div className="menu_h_logo">
                <Image 
                    className="img_col_iguales mx-auto d-block py-5" 
                    src="https://img-authors.flaticon.com/google.jpg" 
                    rounded 
                />
            </div>
    );
}
