import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from './components/Login';
import PortfolioAdd from './components/portfolio/PortfolioAdd';
import OnePortfolio from './components/portfolio/OnePortfolio';
import ResumeAdd from './components/resume/ResumeAdd';
import OneResume from './components/resume/OneResume';
import AdminPage from './components/admin/AdminPage';
import { LoginContext } from './components/sub-components/LoginContext';


const App = () => {

  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  


    return (
      
      <LoginContext.Provider
         value={{
           username,
           setUsername,
           token,
           setToken,
          }}
      >  
       <BrowserRouter>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/portfolio" component={Portfolio}/>
             <Route path="/portfolioadd" component={PortfolioAdd} />
             <Route path="/portfolioone/:portfolioID" component={OnePortfolio} />
             <Route path="/resume" component={Resume}/>
             <Route path="/resumeadd" component={ResumeAdd} />
             <Route path="/resumeone/:resumeID" component={OneResume} />
             <Route path="/contact" component={Contact}/>
             <Route path="/login" component={Login}/>
             <Route path="/adminpage" component={AdminPage}/>
            <Route component={Error}/>
           </Switch>
        </BrowserRouter>
        </LoginContext.Provider>
    );
    };

export default App;
