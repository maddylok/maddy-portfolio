import React, { useState, useEffect } from "react";
import "../components/Navbar.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion"; 

const Navbar = () => {

	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMenu = () => setClick(false);

	const [isNavExpanded, setIsNavExpanded] = useState(false);

	const animateFrom = {opacity: 0, y: -40}
	const animateTo = {opacity: 1, y: 0}


	return (
		<nav className="navigation">
			<a href="/home" className="brand-name">
				maddy lok's portfolio
			</a>
			<button
				className="hamburger"
				onClick={() => {
					setIsNavExpanded(!isNavExpanded);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="white"
				>
					<path
						fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			{/* <div className={click ? "navigation-menu active" : "navigation-menu"}> */}
			<div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
				<ul>
					<motion.li
						initial={animateFrom}
						animate={animateTo}
						transition={{delay: 0.05}}
						className="navigation-item">
						<Link to="home" className="nav-links" spy={true} smooth={true} offset={50} duration={500} onClick={() => {
							setIsNavExpanded(!isNavExpanded);
						}}>
							home
						</Link>
						{/* <a className="navigation-item" href="#home">home</a> */}
					</motion.li>
					<motion.li 
						initial={animateFrom}
						animate={animateTo}
						transition={{delay: 0.10}}
						className="navigation-item">
						<Link to="education" className="nav-links" spy={true} smooth={true} offset={50} duration={500} onClick={() => {
							setIsNavExpanded(!isNavExpanded);
						}}>
							experience
						</Link>
						{/* <a className="navigation-item" href="#education">education</a> */}
					</motion.li>
					<motion.li 
						initial={animateFrom}
						animate={animateTo}
						transition={{delay: 0.20}}
						className="navigation-item">
						<Link to="projects" className="nav-links" spy={true} smooth={true} offset={50} duration={500} onClick={() => {
							setIsNavExpanded(!isNavExpanded);
						}}>
							projects
						</Link>
						{/* <a className="navigation-item" href="#projects">projects</a> */}
					</motion.li>
					<motion.li 
						initial={animateFrom}
						animate={animateTo}	
						transition={{delay: 0.30}}
						className="navigation-item">
						<Link to="experience" className="nav-links" spy={true} smooth={true} offset={50} duration={500} onClick={() => {
							setIsNavExpanded(!isNavExpanded);
						}}>
							education
						</Link>
						{/* <a className="navigation-item" href="#projects">projects</a> */}
					</motion.li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;