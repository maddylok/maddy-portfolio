import React from "react";
import '../pages/Education.css';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MaddyLok_Resume_FS from '../pages/MaddyLok_Resume_FS.pdf';

export default function About() {
    document.body.style.backgroundColor = "#162c16"
    return (
        <div className="education" id="education">
            <div className="education-container">
                <div className="education-header">
                    <h2>Experience</h2>
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        id="first"
                        // contentStyle={{ background: '#a2b8a2', color: '#fff' }}
                        contentStyle={{ background: '#3597a6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #3597a6' }}
                        date= "Jan 2023 - Mar 2023"
                    >
                        <h3 className="vertical-timeline-element-title">Brown Bear Apothecary</h3>
                        <h4 className="vertical-timeline-element-subtitle">Web Developer</h4>
                        <p>
                                Coded a website for a small business utilizing React, JavaScript, CSS, and HTML.
                                Was in charge of UI/UX design.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        // contentStyle={{ background: '#2f362f', color: '#fff' }}
                        contentStyle={{ background: '#74b385', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #74b385' }}
                        date="Nov 2021 - Aug 2022"
                    >
                        <h3 className="vertical-timeline-element-title">ScribeAmerica LLC</h3>
                        <h4 className="vertical-timeline-element-subtitle">Medical Scribe</h4>
                        <p>
                            Accompanied physicians through a fast-paced environment and documented information for examinations, 
                            treatment plans, lab results, etc. directly into patient charts. Stayed on top of large patient loads to 
                            facilitate efficient, accurate, and organized workflow. Utilized electronic medical records system. 
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        // contentStyle={{ background: '#2f362f', color: '#fff' }}
                        contentStyle={{ background: '#a58bcc', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #a58bcc' }}
                        date="Jun 2019 - Feb 2020"
                    >
                        <h3 className="vertical-timeline-element-title">UC Irvine Medical Center</h3>
                        <h4 className="vertical-timeline-element-subtitle">Medical Research Intern</h4>
                        <p>
                            Authored an abstract for “Predictors of Risk Factors for Discharge to Skilled Nursing Facilities in 
                            Adult Trauma Patients”. Compiled data from hospital records, utilized SQL and Microsoft Excel to 
                            input and organize data, and produced timely reports. Worked alongside the chief of trauma surgery and surgical residents. 
                            Was invited to present my abstract at a surgical conference to physicians and medical students
                            in Orlando, Florida in Feb 2020.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <a className="resume" href={MaddyLok_Resume_FS}>
                view full resume
            </a>
        </div>
    );
};