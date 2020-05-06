import React from "react";
//import logo from "./logo.svg";

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom"; // 1. import BrowserRouter
import Home from "./components/Home";
import SimpleForumPage from "./components/SimpleForumPage.js";
import CommentViewPage from "./components/CommentViewPage.js";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/topics">Topics</NavLink>
        <NavLink to="/404">Error</NavLink>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/topics" component={SimpleForumPage} />
        <Route exact path="/topics/:id" component={CommentViewPage} />
        <Route exact path="/404" render={() => <div>page Not Found</div>} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
