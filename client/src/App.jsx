import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/HomePage.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import ContactPage from './components/ContactPage.jsx';

const NotFound = () => <div>Not found go <a href="/">Home Page</a></div>;


class App extends Component{
 
  render(){
    return (
      <Router>
        <div>
          {/*since navbar will be displayed in all the pages, it will be at the top inside div*/}
          <Navbar/>
          {/*making routes*/}
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/projects" component={ProjectPage}/>
            <Route exact path="/contact" component={ContactPage}/>
            <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;