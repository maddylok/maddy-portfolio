import React from "react";
import '../pages/Education.css';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function About() {
    document.body.style.backgroundColor = "#162c16"
    return (
        <div className="education" id="education">
            <div className="education-container">
                <div className="education-header">
                    <h2>Education</h2>
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        // contentStyle={{ background: '#a2b8a2', color: '#fff' }}
                        contentStyle={{ background: '#3597a6', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #a2b8a2' }}
                        date="2017-2021"
                    >
                        <h3 className="vertical-timeline-element-title">Loyola University Chicago</h3>
                        <h4 className="vertical-timeline-element-subtitle">B.S. Biochemistry</h4>
                        <p>
                            Minor in Photography, Cum Laude, Interdisciplinary Honors Program, Captain of Women's
                            Club Basketball, Kappa Kappa Gamma Panhellenic Director
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        // contentStyle={{ background: '#2f362f', color: '#fff' }}
                        contentStyle={{ background: '#d2b4ff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #2f362f' }}
                        date="2022"
                    >
                        <h3 className="vertical-timeline-element-title">New York University</h3>
                        <h4 className="vertical-timeline-element-subtitle">Computer Science</h4>
                        <p>
                            Foundational knowledge in computer science, advanced education in C++
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
};