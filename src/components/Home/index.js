import './index.scss'
import React, { Component } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      letterClass: 'text-animate'
    }
    this.nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
    this.developerArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
  }

  componentDidMount() {
    return setTimeout(() => {
      this.setState({ letterClass: 'text-animate-hover' })
    }, 4000);
  }

  render() {
    return (
      <>
        <div className="container home-page">
          <div className="text-zone" >
            <h1>
              <span className={this.state.letterClass}>H</span>
              <span className={`${this.state.letterClass} _12`}>i,</span>
              <br />
              <span className={`${this.state.letterClass} _13`}>I</span>
              <span className={`${this.state.letterClass} _14`}>'m</span>
              <img src={LogoTitle} alt="developer" />
              <AnimatedLetters
                letterClass={this.state.letterClass}
                strArray={this.nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={this.state.letterClass}
                strArray={this.developerArray}
                idx={21}
              />
            </h1>
            <h2>
              Frontend Developer
            </h2>
            <Link to="/contact" className="flat-button" >CONTACT ME</Link>
          </div>
          <Logo />
        </div>
        <Loader type="pacman" />
      </>
    )
  }
}
