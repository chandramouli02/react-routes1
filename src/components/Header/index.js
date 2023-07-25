import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
          />
          <p>Wave</p>
        </div>

        <ul className="links">
          <Link className="link-style" to="/">
            Home
          </Link>
          <Link className="link-style" to="/about">
            About
          </Link>
          <Link className="link-style" to="/contact">
            Contact
          </Link>
        </ul>
      </div>
    )
  }
}

export default Header
