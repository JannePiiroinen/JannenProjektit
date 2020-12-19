/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import axios from "axios";

export default class GetPhotos extends React.Component {
  state = {
    photos: [],
  };

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
        <div class="container" style = {{ justifyContent: "center", marginTop: "150px", display: "flex" }}>
      <div class="row">
        <div style={{ Width: "100vw", margin: "7px" }}>
          {this.state.photos.map((photo, index) => {
            return (
              <div
                style={{
                  Width: "20%",
                  margin: "8px",
                  height: "auto",
                  display: "inline-block",
                  boxShadow: "5px 5px 5px black",
                }}
                key={index}
              >
                <a target="_parent" href={photo.url}>
                  <img src={photo.thumbnailUrl} alt={photo.url} />
                  {this.state.photoId === photo.id && (
                    <figcaption>{photo.title}</figcaption>
                  )}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    );
  }
}
