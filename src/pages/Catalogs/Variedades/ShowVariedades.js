import React,{useState,useEffect} from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Variedad from "../../../components/Variedad";

export default ()=>{


    const [variedades,setVariedades] = useState([]);

    useEffect(()=>{
      const getVariedades = async ()=>{
      const response = await fetch('http://localhost:1337/variedads');
      const data = await response.json();
      setVariedades(data);
      }
  
      getVariedades();
  
    },[]);
  
  
    return (
        <div className="ShowCuadros">
        <Container className="post_centrado">
            <Row>
            {variedades.map(variedad =>(
                    <Link
                        to={`variedades/variedad/${variedad.id}`}
                    >
                        <Variedad 
                            key={variedad.id}
                            title={variedad.nombre} 
                            description={variedad.slug} 
                            creation_date={variedad.created_at}
                            status={variedad.status}
                        />
                    </Link>
                    ))}
            </Row>
            </Container>
        </div>
    );
}