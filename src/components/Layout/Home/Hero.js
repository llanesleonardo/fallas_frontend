import React from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default ()=>{

  return (
        <div className="hero_home">
        <section className="hero_home_section">
                <div className="hero_home_wrapper">
                    <div>
                    <h2>Lo que tu equipo necesita</h2>
                    <p>Todos los procesos de tu empresa en un solo lugar</p>
                    <Button variant="light">Empezar ahora!</Button>
                    </div>
                </div>
        </section>
        </div>
    );
}
