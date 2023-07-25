import './index.css'
import {Component} from 'react'

class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
          alt="not found"
        />
        <h1>Not Found</h1>
      </div>
    )
  }
}

export default NotFound
