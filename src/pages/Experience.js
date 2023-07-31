// import React from "react";
// import '../pages/Experience.css';
// import MaddyLok_Resume_FS from '../pages/MaddyLok_Resume_FS.pdf';

// const Experience = () => {
//     document.body.style.backgroundColor = "#162c16"
//     return(
//         <div className="experience" id="experience">
//             <h2>Experience</h2>
//             <div className="experience-container">
//                 <div className="brown-bear column">
//                     <div className="row">
//                         <h3>Brown Bear Apothecary</h3>
//                         <div className="bb-title job-title">Web Developer</div>
//                         <div className="bb-date job-date">January 2023-March 2023</div>
//                         <div className="bb-description job-description">
//                             Coded a website for a small business utilizing React, JavaScript, CSS, and HTML. 
//                             Was in charge of UI/UX design.
//                         </div>
//                     </div>
//                 </div>
//                 <div className="scribe column">
//                     <div className="row">
//                         <h3>ScribeAmerica LLC</h3>
//                         <div className="scribe-title job-title">ER Medical Scribe</div>
//                         <div className="scribe-date job-date">November 2021-August 2022</div>
//                         <div className="scribe-description job-description">
//                             Accompanied physicians through a fast-paced environment and documented information for examinations, 
//                             treatment plans, lab results, etc. directly into patient charts. Stayed on top of large patient loads to 
//                             facilitate efficient, accurate, and organized workflow. Utilized electronic medical records system. 
//                         </div>
//                     </div>
//                 </div>
//                 <div className="research-intern column">
//                     <div className="row">
//                         <h3>UC Irvine Medical Center</h3>
//                         <div className="intern-title job-title">Medical Research Intern</div>
//                         <div className="intern-date job-date">June 2019-February 2020</div>
//                         <div className="intern-description job-description">
//                             Authored an abstract for “Predictors of Risk Factors for Discharge to Skilled Nursing Facilities in 
//                             Adult Trauma Patients”. Compiled data from hospital records, utilized SQL and Microsoft Excel to 
//                             input and organize data, and produced timely reports. Worked alongside the chief of trauma surgery and surgical residents. 
//                             Invited to present my abstract at a surgical conference to physicians and medical students
//                             in Orlando, Florida in Feb 2020.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <a className="resume" href={MaddyLok_Resume_FS}>
//                 view full resume
//             </a>
//         </div>
//     );
// };

// export default Experience;

import React from "react";
import '../pages/Experience.css';

const Experience = () => {
    document.body.style.backgroundColor = "#162c16"
    return(
        <div className="experience" id="experience">
            <h2>Education</h2>
            <div className="experience-container">
                <div className="column">
                    <div className="row">
                        <h3>Loyola University Chicago</h3>
                        <div className="bb-title job-title">B.S. Biochemistry</div>
                        <div className="bb-date job-date">2017-2021</div>
                        <div className="bb-description job-description">
                            Minor in Photography, Cum Laude, Interdisciplinary Honors Program, Captain of Women's
                            Club Basketball, Kappa Kappa Gamma Panhellenic Director
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="row">
                        <h3>New York University</h3>
                        <div className="scribe-title job-title">Computer Science</div>
                        <div className="scribe-date job-date">2022</div>
                        <div className="scribe-description job-description">
                            Foundational knowledge in computer science, advanced education in C++
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;