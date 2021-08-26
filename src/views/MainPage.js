import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from '../views/Dashboard';

const routes = [
    {
      path: "/dashboard",
      main: () => <Dashboard></Dashboard>
    },
    {
      path: "/profile",
      main: () => <h2>Bubblegum</h2>
    },
  ];

function MainPage(){
    return (
      <Router>
        <div className="flex flex-col h-screen p-6 bg-steel-grey overscroll-contain">
        <div className="flex flex-row max-w-full">
            <p className="text-white text-lg mb-6">People Counter</p>
            <div className="flex-grow mb-6"></div>
        </div>
        <div className="flex flex-row h-screen">
          <Sidebar></Sidebar>
          <Switch>
                {routes.map((route, index) => (
                  <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={<route.main/>}
                  />
                  ))}
              </Switch>
          </div>
        </div>
      </Router>
    )
  }
  
  export default MainPage
  