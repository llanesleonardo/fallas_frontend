import React from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default ()=>{

  return (
    <>
     <Container>
            <Form className="form_search pt-5">
            <Form.Group className="mb-3" controlId="formBasicSearch">
            <Form.Control type="text" placeholder="Búsqueda" />
            <Form.Text className="text-muted text-center">
                Busca cualquier documento
            </Form.Text>
            </Form.Group>
        </Form>
     </Container>
  </>
    );
}
