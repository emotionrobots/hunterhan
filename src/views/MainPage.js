import { React, Component } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SubPage from './SubPage';
import { CAMERA_GROUPS_LAYOUT, DASHBOARD_LAYOUT } from '../data/main_view_layouts';
import { UserContext } from '../components/UserContext';
import { getUserContext } from '../data/user_data';

const routes = [
    {
      path: "/",
      main: () => <SubPage layout={DASHBOARD_LAYOUT}></SubPage>
    },
    {
      path: "/profile",
      main: () => <h2>Bubblegum</h2>
    },
    {
      path: "/camera groups",
      main: () => <SubPage layout={CAMERA_GROUPS_LAYOUT}></SubPage>
    }
  ];
class MainPage extends Component {
  constructor(){
    super()
    this.state = {
      userContext: null
    }
  }

  componentDidMount(){
    getUserContext((ret) => {
      this.setState({userContext: ret})
    })
  }

  /*
   * Hash values compare with the server and client to update data
   * Store data locally and compare hash periodically to see if the data needs updating
   */
  render() {
    // Find and load user context, if not found then put out a loading until userContext is returned from the backend
    if(this.state.userContext == null){
      return (
        <div className="flex flex-col h-screen p-6 bg-steel-grey overscroll-contain">
          <div className="flex h-full justify-center items-center">
              <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
          </div>
        </div>
      )
    }else{
      return (
        <UserContext.Provider value={this.state.userContext}>
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
        </UserContext.Provider>
      )
    }
  }
}

export default MainPage;