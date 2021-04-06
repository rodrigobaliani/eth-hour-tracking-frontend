import React from 'react'
import { Switch, Route } from "react-router-dom";
import Employees from "./components/Employees"
import Home from './components/Home'
import Hours from './components/Hours'
import Projects from './components/Projects'
import Login from './components/Login'


export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/employees">
                <Employees />
            </Route>
            <Route path="/hours">
                <Hours />
            </Route>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
    )
}
