import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*columna1*/}
                    <div className="col">
                        <h4>columna 1</h4>
                        <ul className="list-unstyled">
                            <li>+5699513548</li>
                            <li>Dalcahue, Chiloe</li>
                            <li>Diego de Almagro 165</li>
                        </ul>
                    </div>
                    {/*columna2*/}
                    <div className="col">
                        <h4>columna 2</h4>
                        <ul className="list-unstyled">
                            <li>LISTA 1</li>
                            <li>LISTA 2</li>
                            <li>LISTA 3</li>
                        </ul>
                    </div>
                    {/*columna3*/}
                    <div className="col">
                        <h4>columna 2</h4>
                        <ul className="list-unstyled">
                            <li>LISTA 1</li>
                            <li>LISTA 2</li>
                            <li>LISTA 3</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} LOS PANAS | DERECHOS RESERVADOS | TERMINOS Y CONDICIONES | PRIVACIDAD
                    </p>
                </div>
            </div>
            )
        }
        export default Footer;