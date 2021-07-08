import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


export default (props) =>{
 
    const {title,url,description,creation_date} = props;
 
    const API_URL = 'http://localhost:1337';
    const formatImage = (url) =>`${API_URL}${url}`;
    
    return(
    <>
        <Card className="Post" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={formatImage(url)} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <small>{creation_date}</small>
                <Card.Text>
                {description}
                </Card.Text>
            </Card.Body>
        </Card>
    </>
    )    
}