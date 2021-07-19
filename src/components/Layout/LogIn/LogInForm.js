import React from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

export default (props)=>{

   const {email,pass,error,setPass,setEmail,setError,handleLogInSubmit} = props;

  return (
        <div className="loginform">
        <section className="loginform_section">
                <div className="loginform_wrapper">
                    <Container>
                        <h2 className="loginform_title">Iniciar sesión</h2>
                            <Form className="form_1" onSubmit={handleLogInSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter email" 
                                        value={email}
                                        onChange={(event) => {
                                            setError('')
                                            setEmail(event.target.value)
                                        }}
                                        />
                                    <Form.Text className="text-muted">
                                        Escribe tu correo electrónico de la empresa
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Password" 
                                        value={pass}
                                        onChange={(event) => {
                                            setError('')
                                            setPass(event.target.value)
                                        }}
                                        />
                                </Form.Group>
                                <div className="d-grid text-center">
                                <Button 
                                    variant="light" 
                                    type="submit"
                                    size="lg"
                                    className="w-100"
                                    >
                                    Iniciar sesión
                                </Button>
                                </div>
                         </Form>   
                            <p className="text-center">{error && <p>{error}</p>}</p>
                            <div className="text-center">
                                <Link>¿Olvidó la contraseña?</Link>
                            </div>
                            <div className="providers_session text-center mt-5">
                                <hr></hr>
                                <p> O iniciar sesión con:</p>
                                <ul className="ul_providers">
                                    <li>
                                        <Link to={`/google/auth/callback`}>
                                             <Image 
                                                className="img_col_iguales" 
                                                src="https://img-authors.flaticon.com/google.jpg" 
                                                rounded 
                                                />
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                    </Container>
                </div>
        </section>
        </div>
    );
}
