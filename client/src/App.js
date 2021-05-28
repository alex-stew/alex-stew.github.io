import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import projectData from "./projectData";


function App() {
    return (
      <Router>
        <div className="h-full flex flex-col justify-between">
          <NavBar />
          <Switch>
            <Route path='/' exact render={() => <Home projectData = { projectData } />}/>
            <Route component={ Contact } path='/contact' />
            <Route component={ About } path='/about' />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }

  export default App;
