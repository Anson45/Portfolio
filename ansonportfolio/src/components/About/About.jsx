import React from 'react';
import './About.css'
import about from "../../assets/about.jpg";
import download from "../../assets/download.svg";


const About = () => {
    return (
        <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <p className="section__subtitle">My introduction.</p>
        <div className="about__container">
            <div className="about__image">
                <img src={about} alt="Profile" />
            </div>
            <div className="about__info">
                <p>web developer with extensive knowledge <br />
                and years of experience. Working in web<br />
                technologies and UI/UX design, delivering<br />
                quality work.</p>
                <div className="about__numbers">
                    <div className="about__number">
                        <h2>3+</h2>
                        <p>years
                        <br /> experience</p>
                    </div>
                    <div className="about__number">
                        <h2>10+</h2>
                        <p>completed
                        <br /> projects</p>
                    </div>
                    <div className="about__number">
                        <h2>2</h2>
                        <p>companies <br />
                        worked</p>
                    </div>
                </div>
                <div className="about__cv">
                    <button className="cv-button">
                        Download CV <span className="download-icon">
                            <img src={download} alt="download" className="downloadIcon" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;
