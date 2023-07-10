import React from "react";
import '../pages/Projects.css';

const Projects = () => {
    document.body.style.backgroundColor = "#162c16"
    return(
        <div className="projects" id="projects">
            <div className="projects-container">
                <h2>Projects</h2>
                <div className="pokemon-zero-sum">
                    <a className="pokemon link" href="https://github.com/maddylok/rockpaperscissors">Pokemon Zero-Sum Game</a>
                    <div className="languages">
                        <p className="languages html">
                            HTML
                        </p>
                        <p className="languages css">
                            CSS
                        </p>
                        <p className="languages javascript">
                            JS
                        </p>
                    </div>
                </div>
                <div className="sango-sushi">
                    <a className="sango link" href="#">Sango Sushi Website</a>
                    <div className="languages">
                        <p className="languages html">
                            HTML
                        </p>
                        <p className="languages css">
                            CSS
                        </p>
                        <p className="languages javascript">
                            JS
                        </p>
                    </div>
                </div>
                <div className="keyboard-webpage">
                    <a className="keyboard link" href="#">My Keyboard Website</a>
                    <div className="languages">
                        <p className="languages html">
                            React
                        </p>
                        <p className="languages css">
                            CSS
                        </p>
                        <p className="languages javascript">
                            JS
                        </p>
                    </div>
                </div>
                <div className="calculator">
                    <a className="calculator link" href="https://github.com/maddylok/calculator">Scientific Calculator</a>
                    <div className="languages">
                        <p className="languages html">
                            HTML
                        </p>
                        <p className="languages css">
                            CSS
                        </p>
                        <p className="languages javascript">
                            JS
                        </p>
                    </div>
                </div>
                <div className="instagram-data-science">
                    <a className="instagram link" href="#">Mock Data Science Project</a>
                    <div className="languages">
                        <p className="languages html">
                            SQL
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;