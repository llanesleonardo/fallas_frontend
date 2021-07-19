import React,{useState,useEffect} from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Campo from "../../../components/Campo";

export default ()=>{


    const [campos,setCampos] = useState([]);

    useEffect(()=>{
      const getCampos = async ()=>{
      const response = await fetch('http://localhost:1337/campos');
      const data = await response.json();
      setCampos(data);
      }
  
      getCampos();
  
    },[]);
  
  
    return (
        <div className="ShowCampos">
        <Container className="post_centrado">
            <Row>
            {campos.map(campo =>(
                    <Link
                        to={`campos/campo/${campo.id}`}
                    >
                        <Campo 
                            key={campo.id}
                            title={campo.nombre} 
                            description={campo.slug} 
                            creation_date={campo.created_at}
                            status={campo.status}
                        />
                    </Link>
                    ))}
            </Row>
            </Container>
        </div>
    );
}