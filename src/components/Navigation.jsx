import "./../css/Navigation.css";
import {Link} from "react-router-dom";
import {useState} from "react";

const Navigation = () => {

    const [menuOpen,setMenuOpen] = useState(false);

    const toggleMenu = (event) => {
        event.preventDefault();
        setMenuOpen(!menuOpen)
;    };

    return (
        <nav id="main-nav">
            <a onClick={toggleMenu} id="toggle-nav" href="#">{menuOpen ? "↑":"↓"}</a>
            <ul className={menuOpen ? "":"hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/houses">Houses</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;