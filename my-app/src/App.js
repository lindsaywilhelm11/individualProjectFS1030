import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute'


export class App extends Component {

  state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (   
      
      
       <BrowserRouter>
          <Navigation />
            <Switch>
            
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/portfolio" component={Portfolio}/>
             <Route path="/resume" component={Resume}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/login" component={Login}/>
             <ProtectedRoute path="/users"></ProtectedRoute>
            <Route component={Error}/>
            <p>{this.state.data}</p>
           </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
