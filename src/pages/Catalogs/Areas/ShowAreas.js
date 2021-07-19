import React,{useState,useEffect} from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Area from "../../../components/Area";

export default ()=>{


    const [areas,setAreas] = useState([]);

    useEffect(()=>{
      const getAreas = async ()=>{
      const response = await fetch('http://localhost:1337/areas');
      const data = await response.json();
      setAreas(data);
      }
  
      getAreas();
  
    },[]);
  
  
    return (
        <div className="ShowCuadros">
        <Container className="post_centrado">
            <Row>
            {areas.map(area =>(
                    <Link
                        to={`areas/area/${area.id}`}
                    >
                        <Area 
                            key={area.id}
                            title={area.nombre} 
                            description={area.slug} 
                            creation_date={area.created_at}
                            status={area.status}
                        />
                    </Link>
                    ))}
            </Row>
            </Container>
        </div>
    );
}