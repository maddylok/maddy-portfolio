import React from "react";
import '../pages/Projects.css';
import pokemon_game from './images/pokemon_game.png';
import calculator from './images/calculator.png';
import keeb from './images/keeb.png';

const Projects = () => {
    document.body.style.backgroundColor = "#162c16"
    return (
        <div className="projects" id="projects">
            <div className="projects-container">
                <h2>Projects</h2>
                <div className="content-container">
                    <div className="pokemon-zero-sum content">
                        <a className="pokemon link" href="https://github.com/maddylok/rockpaperscissors">
                            <img id="pokemon-img left" src={pokemon_game} />
                            <div className="pokemon container right">
                                <div className="title">Pokemon Zero-Sum Game</div>
                                <div className="pokemon about">
                                    Zero-sum game (like rock paper scissors) themed as Nintendo's beloved game, Pokemon. Play
                                    against a cpu Pokemon trainer. First to three wins.
                                </div>
                                <div className="languages">
                                    <p className="languages html">
                                        HTML
                                    </p>
                                    <p className="languages css">
                                        CSS
                                    </p>
                                    <p className="languages javascript">
                                        JavaScript
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="sango-sushi content">
                        <a className="sango link" href="#">
                            <img id="pokemon-img left" src={pokemon_game} />
                            <div className="sango container right">
                                <div className="title">Sango Sushi Website</div>
                                <div className="sango about">
                                    Website I made for my favorite local restaurant.
                                </div>
                                <div className="languages">
                                    <p className="languages html">
                                        HTML
                                    </p>
                                    <p className="languages css">
                                        CSS
                                    </p>
                                    <p className="languages javascript">
                                        JavaScript
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="keyboard-webpage content">
                        <a className="keyboard link" href="#">
                            <img id="keyboard-img left" src={keeb} />
                            <div className="keyboard container right">
                                <div className="title">My Keyboard Website</div>
                                <div className="keyboard about">
                                    Website displaying all my keyboard builds. My first React project.
                                </div>
                                <div className="languages">
                                    <p className="languages html">
                                        React
                                    </p>
                                    <p className="languages css">
                                        CSS
                                    </p>
                                    <p className="languages javascript">
                                        JavaScript
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="calculator content">
                        <a className="calculator link" href="https://github.com/maddylok/calculator">
                            <img id="calculator-img left" src={calculator} />
                            <div className="calculator container right">
                                <div className="title">Scientific Calculator</div>
                                <div className="calculator about">
                                    Fully-functional scientific calculator.
                                </div>
                                <div className="languages">
                                    <p className="languages html">
                                        HTML
                                    </p>
                                    <p className="languages css">
                                        CSS
                                    </p>
                                    <p className="languages javascript">
                                        JavaScript
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="instagram-data-science content">
                        <a className="instagram link" href="#">
                            <img id="pokemon-img left" src={pokemon_game} />
                            <div className="data container right">
                                <div className="title">Mock Data Science Project</div>
                                <div className="data about">
                                    Mock data science project for instagram audience numbers.
                                </div>
                                <div className="languages">
                                    <p className="languages html">
                                        SQL
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;