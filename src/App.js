import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import NotFound from './components/pages/NotFound';
import Movies from './components/movies/Movies';
import AddMovies from './components/movies/addMovie';
import UpdateMovie from './components/movies/updateMovie';

import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider>
          <Router>
            <div className="App">
              <Header branding="Movies"/>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Movies}/>
                  <Route exact path="/movies/add" component={AddMovies}/>
                  <Route exact path="/movies/:_id" component={UpdateMovie}/>
                  <Route component={NotFound}/>
                </Switch>
              </div>
            </div>
          </Router>
        </Provider>
    );
  }
}
export default App;
