import React, { useState } from 'react';
import './Qualifications.css';
import { UilGraduationCap } from '@iconscout/react-unicons';
import { UilDesktop } from '@iconscout/react-unicons';

const Qualifications = () => {
    // State to track active tab
    const [activeTab, setActiveTab] = useState('education');

    // Function to handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualifications</h2>
            <p className="section__subtitle">My personal journey.</p>

            <div className="qualification__container container">
                <div className="qualification_tabs">
                    <div
                        className={`qualification_button button--flex ${activeTab === 'education' ? 'qualification_active' : ''}`}
                        onClick={() => handleTabClick('education')}
                    >
                        <UilGraduationCap className="qualification_icons" />
                        Education
                    </div>
                    <div
                        className={`qualification_button button--flex ${activeTab === 'work' ? 'qualification_active' : ''}`}
                        onClick={() => handleTabClick('work')}
                    >
                        <UilDesktop className="qualification_icons" />
                        Work
                    </div>
                </div>
                <div className="qualification_selections">
                    {/* Conditionally render the Education content */}
                    {activeTab === 'education' && (
                        <div className="qualification_content Qualification_active" id="education">
                            <div className="qualification_data text_left">
                                <div>
                                    <h3 className="qualification_title">Web Developer</h3>
                                    <span className="qualification_subtitle">UST</span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i> 2014-2016
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>

                            <div className="qualification_data">
                                <div></div>
                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification_title">Web Design</h3>
                                    <span className="qualification_subtitle">Spain-University</span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i> 2016-2017
                                    </div>
                                </div>
                            </div>

                            <div className="qualification_data text_left">
                                <div>
                                    <h3 className="qualification_title">Computer Engineer</h3>
                                    <span className="qualification_subtitle">Peru-University</span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i> 2017-2020
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>

                            <div className="qualification_data">
                                <div></div>
                                <div>
                                    <span className="qualification_rounder"></span>
                                </div>
                                <div>
                                    <h3 className="qualification_title">MCA</h3>
                                    <span className="qualification_subtitle">Peru-University</span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i> 2009-2014
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Conditionally render the Work content */}
                    {activeTab === 'work' && (
                        <div className="qualification_content Qualification_active" id="work">
                            {/* <div className="qualification_data text_left">
                                <div>
                                    <h3 className="qualification_title">Software Developer</h3>
                                    <span className="qualification_subtitle">UST</span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i> 2014-2016
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div> */}

                            <div className="qualification_data">
                                <div></div>
                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification_title">Web Make</h3>
                                    <span className="qualification_subtitle">Spain-University</span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i> 2016-2017
                                    </div>
                                </div>
                            </div>

                            <div className="qualification_data text_left">
                                <div>
                                    <h3 className="qualification_title">Computer Engineer</h3>
                                    <span className="qualification_subtitle">Peru-University</span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i> 2017-2020
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>

                            <div className="qualification_data">
                                <div></div>
                                <div>
                                    <span className="qualification_rounder"></span>
                                </div>
                                <div>
                                    <h3 className="qualification_title">MCA</h3>
                                    <span className="qualification_subtitle">Peru-University</span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i> 2009-2000
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Qualifications;
