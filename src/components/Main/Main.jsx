import "./Main.scss";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <Link to="/about" className="main__about">About</Link>
    </div>
  )
}

export default Main
