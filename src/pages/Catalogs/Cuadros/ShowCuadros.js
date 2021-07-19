import React,{useState,useEffect} from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Cuadro from "../../../components/Cuadro";

export default ()=>{


    const [cuadros,setCuadros] = useState([]);

    useEffect(()=>{
      const getCuadro = async ()=>{
      const response = await fetch('http://localhost:1337/cuadros');
      const data = await response.json();
      setCuadros(data);
      }
  
      getCuadro();
  
    },[]);
  
  
    return (
        <div className="ShowCuadros">
        <Container className="post_centrado">
            <Row>
            {cuadros.map(cuadro =>(
                    <Link
                        to={`cuadros/cuadro/${cuadro.id}`}
                    >
                        <Cuadro 
                            key={cuadro.id}
                            title={cuadro.nombre} 
                            description={cuadro.slug} 
                            creation_date={cuadro.created_at}
                            status={cuadro.status}
                            numerocuadro={cuadro.numero_de_cuadro}
                        />
                    </Link>
                    ))}
            </Row>
            </Container>
        </div>
    );
}