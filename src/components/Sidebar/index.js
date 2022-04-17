import './index.scss'

import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSub from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class index extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
          <img className="sub-logo" src={LogoSub} alt="logo" />
        </Link>
        <nav>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/" >
            <FontAwesomeIcon
              icon={faHome}
              color="#4d4d4d" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about" >
            <FontAwesomeIcon
              icon={faUser}
              color="#4d4d4d" />
          </NavLink>
          <NavLink
            xact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact" >
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#4d4d4d" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/emre-cem-%C3%A7elik-601996189/" >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/emrecemcelikk" >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
