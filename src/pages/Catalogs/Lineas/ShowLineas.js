import React,{useState,useEffect} from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Linea from "../../../components/Linea";

export default ()=>{


    const [lineas,setLineas] = useState([]);

    useEffect(()=>{
      const getLinea = async ()=>{
      const response = await fetch('http://localhost:1337/lineas');
      const data = await response.json();
      setLineas(data);
      }
  
      getLinea();
  
    },[]);
  
  
    return (
        <div className="ShowCuadros">
        <Container className="post_centrado">
            <Row>
            {lineas.map(linea =>(
                    <Link
                        to={`lineas/linea/${linea.id}`}
                    >
                        <Linea 
                            key={linea.id}
                            title={linea.nombre} 
                            description={linea.slug} 
                            creation_date={linea.created_at}
                            status={linea.status}
                        />
                    </Link>
                    ))}
            </Row>
            </Container>
        </div>
    );
}