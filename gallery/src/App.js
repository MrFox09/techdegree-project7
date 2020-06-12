import React,{Component} from 'react';
import './index.css';
import apiKey from './config';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';


// import Components

import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';



class App extends Component {



  render(){
    return (
      <BrowserRouter>
        <div className= 'container' >
    
          <Search />
          <Nav />
          <Switch>
          <Route exact path="/" render ={() =><Redirect to='/cats'/> } />
            <Route exact path="/cats" render= {() => <PhotoContainer />  }  />
            <Route exact path="/dogs" render= {() => <PhotoContainer />  }  />
            <Route exact path="/computers" render= {() => <PhotoContainer />  }  />
            <Route component={NotFound} />
          </Switch>
            
        </div>
      </BrowserRouter>
    );

  }
  
  
}

export default App;
