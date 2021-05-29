import "./App.css"
import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./containers/Navbar"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="route-container">
          <Navbar />
          <Route exact path="/"/>
          <Route exact path="/team"/>
          <Route exact path="/profile"/>
          <Route exact path="/battle"/>
        </div>
      </Router>
    )
  }
}

export default App;
