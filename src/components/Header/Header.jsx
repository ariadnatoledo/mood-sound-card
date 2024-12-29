import "./Header.scss"
import { Link } from "react-router-dom"
import logoAri from "../../assets/logo/ari-logo.png"

function Header() {
  return (
    <header className="header">
      <Link to="/">
    <img src={logoAri} alt="Ariadna Toledo Software Logo" className="header__title" />
    </Link>
  </header>
  )
}

export default Header
