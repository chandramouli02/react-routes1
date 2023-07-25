import './App.css'
import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
