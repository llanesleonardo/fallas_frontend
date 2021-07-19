import React from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default ()=>{

  return (
        <div className="about_home">
        <section className="about_home_section">
                <div className="about_home_wrapper">
                    <Row>
                        <Col xs={6} md={4}>
                             <Image className="img_col_iguales" src="https://image.flaticon.com/icons/png/512/4568/4568722.png" rounded />
                             <p><b>Lo que tu equipo necesita</b></p>
                            <p>Todos los procesos de tu empresa en un solo lugar</p>
                        </Col>
                        <Col xs={6} md={4}>
                              <Image className="img_col_iguales" src="https://image.flaticon.com/icons/png/512/4568/4568722.png" rounded />
                              <p><b>Lo que tu equipo necesita</b></p>
                            <p>Todos los procesos de tu empresa en un solo lugar</p>
                        </Col>
                        <Col xs={6} md={4}>
                              <Image className="img_col_iguales" src="https://image.flaticon.com/icons/png/512/4568/4568722.png" rounded />
                            <p><b>Lo que tu equipo necesita</b></p>
                            <p>Todos los procesos de tu empresa en un solo lugar</p>
                        </Col>
                    </Row>
                    <div>
                    </div>
                </div>
        </section>
        </div>
    );
}
