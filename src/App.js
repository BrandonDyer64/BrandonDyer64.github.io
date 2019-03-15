import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import logo from "./logo.svg";
import Footer from "./img/footer.png";
import "./style/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ minHeight: "100%" }}>
          <Navbar />
          <Container>
            <Route exact path="/" component={Home} />
          </Container>
          <footer style={{ backgroundImage: "url(" + Footer + ")" }}>
            <Container>
              <p>© 2019 Brandon Dyer</p>
              <Row>
                <Col md={8}>
                  <p style={{ fontSize: "8pt" }}>
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                    KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                    PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
                    OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                  </p>
                </Col>
              </Row>
            </Container>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
