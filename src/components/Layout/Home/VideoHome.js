import React from "react"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Player,BigPlayButton  } from 'video-react';

export default ()=>{

  return (
        <div className="video_home">
        <section className="video_home_section">
                <div className="video_home_wrapper">
                    <Container>
                        <Player  className="video_player">
                         <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                         <BigPlayButton position="center" />
                        </Player>
                    </Container>
                </div>
        </section>
        </div>
    );
}
