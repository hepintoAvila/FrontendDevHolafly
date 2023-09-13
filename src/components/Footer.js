// @flow
import React from 'react';
import logoPuff from '../assets/images/logo-footer.png';
import { Link } from 'react-router-dom';
import ImgFacebock from '../assets/images/facebock.png';
import ImgInstagram from '../assets/images/instagram.png';
import ImgTwitter from '../assets/images/twitter.png';
import logo2 from '../assets/images/logo2.png';

const Footer = (): React$Element<any> => {
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="container-grid-footer1">
                    <div class="item item-1">
                        <Link to="#">
                            <span className="logo-footer">
                                <img src={logoPuff} alt="logo" height="40" width="80" />
                            </span>
                        </Link>
                    </div>
                    <div class="item item-5 ">
                        <div class="container-social">

                            <div class="list-img">
                                <span className="titulo">FOLLOW US ON</span>
                                <img src={ImgFacebock} alt="Instagram" />
                                <img src={ImgTwitter} alt="Instagram" />
                                <img src={ImgInstagram} alt="Instagram" />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container-grid-footer2">
                    <div class="item item-1">
                        <div className="copyright">
                            KITTENS Corpyright 2023 - Developed by: holmespinto.avila@gmail.com
                        </div>
                    </div>
                    <div class="item item-2 ">
                        <div class="brandlive">
                            <img src={logo2} alt="logo2" />

                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
