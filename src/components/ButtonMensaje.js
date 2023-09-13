// @flow
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components;
type ButtonMensajeProps = {
    mensase: string,
    image: string,
};
const ButtonMensaje = ({ mensaje, image }: ButtonMensajeProps) => {
    return (
        <React.Fragment>
            <Carousel.Caption>
                <Link to="#">
                    <div className="navbar-dark">
                        <div className="navbar-dark-slider">
                            <div className="mensaje">{mensaje}</div>
                            <div className="button">KITTENS</div>
                        </div>
                    </div>
                </Link>
            </Carousel.Caption>
            <img className="d-block w-100 h-50" src={image} alt="Third slide" />
        </React.Fragment>
    );
};
export default ButtonMensaje;