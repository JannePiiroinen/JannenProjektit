import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from 'axios'
import GetPhotos from "./components/GetPhotos";
import SinglePhoto from "./components/SinglePhoto";
import { Switch, Route } from "react-router-dom";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photoId: null,
    };
  }

componentDidMount() {
  axios
    .get(`http://jsonplaceholder.typicode.com/photos?_start=0&_limit=10`)
    .then((res) => {
      console.log("response: ", res);
      this.setState({ photos: res.data });
    });
}
  render() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <GetPhotos photos={this.state.photos} />
        </Route>
        <Route path='/photo/:id'>
          <SinglePhoto photos={this.state.photos} />
        </Route>
      </Switch>
    </div>
  );
  }
}
