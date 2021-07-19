import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


export default (props) =>{

    const {title,description,creation_date,id} = props;

    
    return(
    <>
        <Card className="Campo" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <small>{creation_date}</small>
                <Card.Text>
                {description}
                </Card.Text>
                <Card.Text>
                {id}
                </Card.Text>
            </Card.Body>
        </Card>
    </>
    )    
}