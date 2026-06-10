import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()


  return (
    <header className="bg-light p-3">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <h3 className="m-0 display-6"><strong>Nirubama</strong>/Student</h3>

        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a
                className={`nav-link ${location.pathname === "/" ? "text-primary" : "text-dark"}`}
                href="/"
                onClick={(e) => {
                  e.preventDefault()
                  navigate("/")
                }}
              >
                About Me
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${location.pathname === "/Resume" ? "text-primary" : "text-dark"}`}
                href="/Resume"
                onClick={(e) => {
                  e.preventDefault()
                  navigate("/Resume")
                }}
              >
                Resume
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${location.pathname === "/Projects" ? "text-primary" : "text-dark"}`}
                href="/Projects"
                onClick={(e) => {
                  e.preventDefault()
                  navigate("/Projects")
                }}
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
