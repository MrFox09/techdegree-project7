import React,{Component} from 'react';
import './index.css';
import apiKey from './config';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import axios from 'axios';


// import Components

import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';





class App extends Component {

  constructor() {
    super();
    this.state ={
      cats:[],
      dogs:[],
      computer:[],
      search:[],
      loading: true
    };
  } 

  componentDidMount(){
    this.performSearch('cats');
    this.performSearch('dogs');
    this.performSearch('computer');

  }

  performSearch = (query) =>{
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      if (query === 'cats') {

        this.setState({
          cats: response.data.photos.photo,
          loading:false
        });
        
      } else if(query === 'dogs') {
        this.setState({
          dogs: response.data.photos.photo,
          loading:false
        });
        
      }else if(query === 'computer') {
        this.setState({
          computer: response.data.photos.photo,
          loading:false
        });

      }else{
        this.setState({
          search: response.data.photos.photo,
          loading:false
        });

      }
      
     })
    .catch(error => {
          // handle error
      console.log('Error with data fetching' ,error);
 
    }); 
 
  }






  render(){
    console.log(this.state)
    return (
      <BrowserRouter>
        <div className= 'container' >
    
          <Search onSearch={this.performSearch} data= {this.state.search}/>
          <Nav />
          <Switch>
            <Route exact path="/" render ={() =><Redirect to='/cats'/> } />
            <Route path="/cats" render= {() => <PhotoContainer data = {this.state.cats}/>  }  />
            <Route path="/dogs" render= {() => <PhotoContainer data = {this.state.dogs}/>  }  />
            <Route path="/computers" render= {() => <PhotoContainer data = {this.state.computer} />  }  />   
            <Route path="/search" render={() => <PhotoContainer data = {this.state.search} /> } />        
            <Route component={NotFound} />
          </Switch>
            
        </div>
      </BrowserRouter>
    );

  }
  
  
}

export default App;
