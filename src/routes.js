/*Routing file which tell about all the specific routes of the website */
import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Profile from "./containers/Profile";
import AssignmentList from "./containers/AssignmentList";
import AssignmentDetail from "./containers/AssignmentDetail";
import AssignmentCreate from "./containers/AssignmentCreate";
import About from "./containers/About";
import Home from "./containers/Home";


const BaseRouter = () => (
  <Hoc>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
      // id is unique for a user
    <Route path="/profile/:id" component={Profile} />
    <Route exact path="/" component={Home} />
    <Route exact path="/list" component={AssignmentList} />
    <Route exact path="/assignments/:id" component={AssignmentDetail} />
    <Route exact path="/create/" component={AssignmentCreate} />
    <Route exact path="/about/" component={About} />
  </Hoc>
);

export default BaseRouter;
