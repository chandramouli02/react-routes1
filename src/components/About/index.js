import './index.css'
import {Component} from 'react'

class About extends Component {
  render() {
    return (
      <div className="container">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
          alt="about"
        />
        <h1>About</h1>
        <p>I Love to create! I am a frontend Web developer</p>
      </div>
    )
  }
}

export default About
