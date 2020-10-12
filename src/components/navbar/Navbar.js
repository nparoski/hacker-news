import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="navbar__brand">
          <img src="/images/logo.svg" alt="Logo"/>
          <span>Hacker News</span>
        </a>
        <ul className="navbar__links">
          <li><a href="#" className="btn btn--primary">Login</a></li>
        </ul>
      </div>
    </nav>
  )
}
