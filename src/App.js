import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Search from './components/search';
import Nav from './components/nav';
import PhotoGallery from './components/photoGallery';
import NotFound from './components/notFound';
import Home from './components/home';
import Spinner from './components/spinner';


class App extends Component {
  state={
    photos: [],
    text: '',
    loading: true
  }


  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_FLICKR_KEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
          photos: res.data.photos.photo,
          text: query,
          loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching data', error);
    });
  }


  render() {
    return (
      <Router>
        <div className="container">
          <Search onSearch={this.performSearch} />
          <Nav onSearch={this.performSearch} />

          <Switch>
            <Route 
              exact path="/" 
              component={Home}
            />  

            <Route 
              path="/" 
              render={() => {
                return (
                  (this.state.loading)
                  ? <Spinner />
                  : <PhotoGallery data={this.state.photos} text={this.state.text} /> 
                )
            }}/>

            <Route 
              path="/search/:query" 
              render={() => {
                return (
                  (this.state.loading)
                  ? <Spinner />
                  : <PhotoGallery data={this.state.photos} text={this.state.text} />
                )
              }}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

