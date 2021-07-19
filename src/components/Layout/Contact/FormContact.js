import React from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default ()=>{

  return (
        <div className="form_contact">
        <section className="form_contact_section">
                <div className="form_contact_wrapper py-5">
                    <div>
                        <h2><b>¡Contáctanos!</b></h2>
                        <p>¿Neceistas ayuda o quieres dejarnos tus comentario?</p>
                    </div>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
        </section>
        </div>
    );
}
