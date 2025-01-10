import "./Header.scss";
import { Link } from "react-router-dom";
import logoAri from "../../assets/logo/ari-logo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img
          src={logoAri}
          alt="Ariadna Toledo Software Logo"
          className="header__title"
        />
      </Link>
      <nav className="header__nav">
        <Link to="/portfolio" className="header__link">
          Portfolio
        </Link>
      </nav>
    </header>
  );
}

export default Header;
