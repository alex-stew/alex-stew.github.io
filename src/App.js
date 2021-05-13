import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
// import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import projectData from "./projectData";


function App() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path='/' exact render={(props) => <Home projectData = { projectData } />}/>
            <Route component={ Contact } path='/contact' />
            <Route component={ SinglePost } path='/post/:slug' />
            <Route component={ Post } path='/post' />
            {/* <Route component={ Project } path='/project' /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }


export default App;
