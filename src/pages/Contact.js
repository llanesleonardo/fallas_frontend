import React,{useState,useEffect} from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationMain from "../components/Layout/Navigations/NavigationMain";
import FormContact from "../components/Layout/Contact/FormContact";
import InfoContact from "../components/Layout/Contact/InfoContact";

export default ()=>{
  
    return (
            <>
            <NavigationMain />
        <Container>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <FormContact />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <InfoContact />
                </Col>
            </Row>
         </Container>
            </>
    );
}
