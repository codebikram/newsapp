import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

export default class App extends Component {
  state = {
    progress: 0
  };

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  pageSize = 5;
  apikey =process.env.REACT_APP_NEWS_API_KEY;
  render() {
    return (
      <Router>
        <>
        <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <NavBar />      
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress} key="home" pageSize={this.pageSize} country="in" category="general" apikey={this.apikey} />
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" apikey={this.apikey} />
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" apikey={this.apikey} />
            </Route>

            <Route exact path="/entertainment">
              <News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" apikey={this.apikey} />
            </Route>

            <Route exact path="/general">
              <News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" apikey={this.apikey} />
            </Route>

            <Route exact path="/health">
              <News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" apikey={this.apikey} />
            </Route>
            <Route exact path="/science">
              <News setProgress={this.setProgress} key="" pageSize={this.pageSize} country="in" category="science" apikey={this.apikey} />
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" apikey={this.apikey} />
            </Route>
            <Route exact path="/technology">
              <News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" apikey={this.apikey} />
            </Route>
          </Switch>

        </>
      </Router>
    )
  }
}

