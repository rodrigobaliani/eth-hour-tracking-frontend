import React from 'react'
import { Switch, Route } from "react-router-dom";
import Employees from "./components/Employees"
import Home from './components/Home'
import Hours from './components/Hours'
import Contracts from './components/Contracts'
import Login from './components/Login'
import EditContract from './components/EditContract'
import EditProject from './components/EditProject'



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
            <Route path="/contracts" exact>
                <Contracts />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/contracts/projects" exact>
                <EditContract />
            </Route>
            <Route path="/contracts/projects/tasks" exact>
                <EditProject />
            </Route>
        </Switch>
    )
}
