import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import logo from "./logo.svg";
import "./style/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ minHeight: "100%" }}>
          <Route path="/" component={Navbar} />
          <Container>
            <Route exact path="/" component={Home} />
          </Container>
          <footer>
            <Container>
              <p>(C) 2019 Brandon Dyer</p>
              <ul>
                <li>Home</li>
              </ul>
            </Container>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
