import './index.scss'
import React, { Component } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJs, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

export default class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      letterClass: "text-animate"
    }
  }

  componentDidMount() {
    return setTimeout(() => {
      this.setState({ letterClass: 'text-animate-hover' })
    }, 3000)
  }

  render() {
    return (
      <>
        <div className="container about-page" >
          <div className="text-zone" >
            <h1>
              <AnimatedLetters
                letterClass={this.state.letterClass}
                strArray={('About Me').split("")}
                idx={12} />
            </h1>
            <p>
              I'm very ambitious front-end developer looking for a role in
              established IT company with the opportunity to work with the latest
              technologies on challenging and diverse projects.
            </p>
            <p>
              I'm quietly confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time.
            </p>
            <p>
              If I need to define myself in one sentence that would be a family
              person, father of a beautiful daughter, a sports fanatic,
              photography enthusiast, and tech-obsessed!!!
            </p>
          </div>
          <div className="stage-cube-cont" >
            <div className="cubespinner" >
              <div className="face1" >
                <FontAwesomeIcon icon={faHtml5} color="#f06529" />
              </div>
              <div className="face2" >
                <FontAwesomeIcon icon={faReact} color="#61dbfb" />
              </div>
              <div className="face3" >
                <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
              </div>
              <div className="face4" >
                <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
              </div>
              <div className="face5" >
                <FontAwesomeIcon icon={faNodeJs} color="#3c873a" />
              </div>
              <div className="face6" >
                <FontAwesomeIcon icon={faGithub} color="#211f1f" />
              </div>
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
  }
}
