import { Link } from "react-router-dom"
import "./Navbar.scss";

export default function Navbar() {

  // const pages = ['home', 'about', 'projects', 'contact']

  return (
    <div className="nav-container">
      <svg fill="grey" height="12vh" width="100vw" viewBox="0 0 535 100">
        {/* <path d="M7.237 23.5.5 16.764V7.237L7.237.5h71.526L85.5 7.237v9.527L78.763 23.5H7.237Z" stroke="#484B45"></path> */}
        <path d="M 12.237 43.5 L 0.5 31.764 V 12.237 L 12.237 0.5 h 511.526 L 535.5 12.237 v 19.527 L 523.763 43.5 Z" stroke="#484B45"></path>
          <foreignObject x="10" y="2" width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml" className="nav-shape">
              <nav className="navbar">
                <ul>
                  <li>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/projects">Projects</Link>
                    <Link className="link" to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </foreignObject>
      </svg>
    </div>
  )
}