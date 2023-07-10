import React, {useState} from "react";
import "../components/Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

	return (
		<nav className="navigation">
			<a href="/home" className="brand-name">
				maddy lok's portfolio
			</a>
			<button className="hamburger">
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
			<div className={click ? "navigation-menu active" : "navigation-menu"}>
				<ul>
					<li className="navigation-item">
                        <Link to="home" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>home</Link>
						{/* <a className="navigation-item" href="#home">home</a> */}
					</li>
					<li className="navigation-item">
                        <Link to="education" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>education</Link>
						{/* <a className="navigation-item" href="#education">education</a> */}
					</li>
                    <li className="navigation-item">
                        <Link to="projects" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>projects</Link>
                        {/* <a className="navigation-item" href="#projects">projects</a> */}
                    </li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;