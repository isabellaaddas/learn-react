import "./../css/Header.css";
// Import the image as an object with reference to its location
import logo from "./../images/house-logo.png";

const Header = () => {
    return (
        <header id="main-header">
            <img id="logo" src={logo} alt="Logo" />
            <h1>Finding the Right Home</h1>
        </header>
    );
};

export default Header;