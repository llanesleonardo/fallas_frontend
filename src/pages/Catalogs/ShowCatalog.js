import React,{useState,useEffect} from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";

export default ()=>{

    return (
    <div className="ShowCatalog">
        <Container className="post_centrado">
            <Row>
                Catalogs
                <Link to="/catalogs/campos">
                    Campos
                </Link>
                <Link to="/catalogs/cuadros">
                    Cuadros
                </Link>
                <Link to="/catalogs/variedades">
                    Variedades
                </Link>
                <Link to="/catalogs/areas">
                    Area
                </Link>
                <Link to="/catalogs/lineas">
                    Linea
                </Link>
            </Row>
            </Container>
        </div>
    );
}