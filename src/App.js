import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import EditStudent from './editform';
import StudentForm from './form';
import GetStudents from './getstudents';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                
                <li className="nav-item">
                  <Link to={'/form'} className="nav-link">StudentForm</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/getstudents'} className="nav-link">GetStudents</Link>
                </li>
              </ul>
            </div>
          </nav>
          <h2>Ross University Student Attendance</h2>
          <br/>
          <Switch>
              <Route exact path='/form' component={ StudentForm } />
              <Route path='/editform/:id' component={ EditStudent } />
              <Route path='/getstudents' component={ GetStudents } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
