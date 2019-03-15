import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import logo from './logo.svg'
import './style/App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App' style={{ minHeight: '100%' }}>
          <Navbar />

          <Container>
            <Route exact path='/' component={Home} />
          </Container>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
