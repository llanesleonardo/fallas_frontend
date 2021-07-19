import React from "react"; 
import Container from 'react-bootstrap/Container';

export default ({title})=>{

    return (
        <div className="title_main">
        <section className="title_main_section">
                <div className="title_main_wrapper">
                    <Container>
                            <h3 className="py-3">{title}</h3>
                    </Container>
                </div>  
        </section>
        </div> 
    );
}
