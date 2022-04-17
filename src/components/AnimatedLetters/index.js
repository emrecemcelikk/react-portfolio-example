import './index.scss'
import React, { Component } from 'react'

export default class AnimatedLetters extends Component {
  render() {
    const { letterClass, strArray, idx } = this.props
    console.log(strArray)
    return (
      <span>
        {
          strArray.map((char, i) => {
            return (
              <span key={char + i}
                className={`${letterClass} _${i + idx}`} >
                {char}
              </span>
            )
          })
        }
      </span>
    )
  }
}
