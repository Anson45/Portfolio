import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import paperPlane from "../../assets/paperPlane.svg";
import blob from "../../assets/blob.svg";
import mouseIocn from "../../assets/mouse_icon.svg";
import arrow from "../../assets/arrow.svg";
import perfil from "../../assets/perfil.png";

import { faReact } from '@fortawesome/free-brands-svg-icons';
import { UilReact } from '@iconscout/react-unicons'
import { UilLinkedinAlt } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home-content">
                <div className="home-icons">
                    <div className="icon">
                        <UilInstagram size={32} />
                    </div>
                    <div className="icon">
                        <UilGithubAlt  size={32} />
                    </div>
                    <div className="icon">
                        <UilLinkedinAlt size={32} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faReact} size='2x' spin />
                        {/* <UilReact size={32} spin /> */}
                    </div>
                </div>
                <div className="home-text">
                    <h2 className="section__title">Hi, I'am Anson </h2>
                    <p className="section__subtitle">FullStack developer</p>
                    <p>
                        High level experience in web design and <br />
                        development knowledge, Producing <br />
                        quality work.
                    </p>
                    <a href="#contact" className="contact-button">
                        Contact Me
                        <img src={paperPlane} alt="Paper Plane" className="plane-icon" />
                    </a>
                    <div className="mouseIcon">
                        <img src={mouseIocn} alt="mouse icon" className="mouse-icon" />
                        <p className="mouse-text">Scroll down</p>
                        <img src={arrow} alt="arrow icon" className="arrow-icon" />
                    </div>
                </div>
            </div>

            <div className="home-image">
            <div className="image-background">
                <img src={blob} alt="Home Background" className="background-img" />
                <img src={perfil} alt="Project Image" className="top-img" />
            </div>
        </div>
    </section>
    );
};

export default Home;
