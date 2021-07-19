import React from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";

export default ()=>{

  return (
        <div className="about_home">
        <section className="about_home_section">
                <div className="about_home_wrapper">
                    <div>
                        <Image 
                            className="w-50 py-3" 
                            src="https://www.zoho.com/sites/default/files/creator/home/digital-transformation1.webp" 
                        />
                        <p>Ubicación: Hermosillo, Sonora. Nombre de calle, Nombre de Coonia.</p>
                        <p>Teléfono: (6622) 22222</p>
                        <p>Correo: correo@correo.com</p>
                    </div>
                </div>
        </section>
        </div>
    );
}
