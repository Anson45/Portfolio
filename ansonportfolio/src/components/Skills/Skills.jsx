import React, { useState } from 'react';
import "./skills.css"

import { UilBracketsCurly } from '@iconscout/react-unicons'
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilServerNetwork } from '@iconscout/react-unicons'
import { UilSwatchbook } from '@iconscout/react-unicons'



const Skills = () => {
    const skillsData = [
        {
            title: "Front End Developer",
            subtitle: "More than 4 years",
            skills: [
                { name: "HTML", percentage: "90%" },
                { name: "CSS", percentage: "80%" },
                { name: "JavaScript", percentage: "85%" },
            ],
        },
        {
            title: "SQL & Power BI",
            subtitle: "More than 4 years",
            skills: [
                { name: "SQL", percentage: "85%" },
                { name: "Power BI", percentage: "80%" },
            ],
        },
        {
            title: "Back End Developer",
            subtitle: "More than 4 years",
            skills: [
                { name: "Node.js", percentage: "80%" },
                { name: "Express.js", percentage: "75%" },
            ],
        },
    ];
    const [openIndex, setOpenIndex] = useState(0);

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Here are my skills.</span>

            <div className="skills__container grid">
                {skillsData.map((category, index) => (
                    <div key={index} className={`skills_content ${openIndex === index ? 'skills_open' : 'skills_close'}`}>
                        <div className="skills_header" onClick={() => toggleSection(index)}>
                            {index === 0 ? <UilBracketsCurly className="skills_icons" /> : index === 1 ? <UilServerNetwork className="skills_icons" /> : <UilSwatchbook className="skills_icons" />}
                            <div>
                                <h1 className="skills_title">{category.title}</h1>
                                <span className="skills_subtitle">{category.subtitle}</span>
                            </div>
                            <UilAngleDown className="skills_arrow" />
                        </div>
                        <div className="skills_list">
                            {category.skills.map((skill, skillIndex) => (
                                <div className="skills_data" key={skillIndex}>
                                    <div className="skills_titles">
                                        <h3 className="skills_name">{skill.name}</h3>
                                        <span className="skills_number">{skill.percentage}</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage" style={{ width: skill.percentage }}></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;