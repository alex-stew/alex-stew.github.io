import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route component={ Home } path='/' exact />
          <Route component={ Contact } path='/contact' />
          <Route component={ SinglePost } path='/post/:slug' />
          <Route component={ Post } path='/post' />
          <Route component={ Project } path='/project' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
