import React from "react"; 
import Container from 'react-bootstrap/Container';
import NavigationFooter from "./Navigations/NavigationFooter";

export default ()=>{

    return (
        <div className="footer">
        <section className="footer_one">
                <div className="footer_one_wrapper">
                    <Container>
                            <NavigationFooter/>
                    </Container>
                </div>  
        </section>
        </div> 
    );
}
