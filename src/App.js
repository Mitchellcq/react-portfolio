import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import background from "./assets/bricks.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render() {
    return (

      <Router>
        <div style={{ backgroundImage: `url(${background})` }}>
          <Navbar />

          <Switch>
            <Route path="/Contact" component={Contact} />

            <Route path="/Portfolio" component={Portfolio} />

            <Route path="/" component={Home} />

          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
