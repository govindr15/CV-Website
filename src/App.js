import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </Route>
        </Switch>
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        ></link>
      </div>
    </Router>
  );
}

export default App;
