import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [isNavbarActive, setNavbarActive] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar__brand">
          <img src="/images/logo.svg" alt="Logo" />
          <span>Hacker News</span>
        </Link>
        <div className="navbar__menu">
          <button
            className={`navbar__toggler ${isNavbarActive ? 'active' : ''}`}
            onClick={() => (isNavbarActive ? setNavbarActive(false) : setNavbarActive(true))}
          >
            <div className="navbar__bar"></div>
            <div className="navbar__bar"></div>
            <div className="navbar__bar"></div>
          </button>
          <div className={`navbar__links ${isNavbarActive ? 'active' : ''}`}>
            <NavLink exact to="/" className="navbar__link">
              Best
            </NavLink>
            <NavLink to="/stories/new" className="navbar__link">
              New
            </NavLink>
            <NavLink to="/stories/top" className="navbar__link">
              Top
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
