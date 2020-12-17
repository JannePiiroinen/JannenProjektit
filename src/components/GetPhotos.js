/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import axios from "axios";

export default class GetPhotos extends React.Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    axios
      .get(`http://jsonplaceholder.typicode.com/photos?_start=0&_limit=8`)
      .then((res) => {
        console.log("response: ", res);
        this.setState({ photos: res.data });
      });
  }

  render() {
    return (
      <div class="row">
        <div style={{ Width: "100vw", margin: "10px" }}>
          {this.state.photos.map((photo, index) => {
            return (
              <div
                style={{
                  Width: "20%",
                  margin: "10px",
                  height: "auto",
                  display: "inline-block",
                }}
                key={index}
              >
                <figure>
                  <a target="_parent" href={photo.url}>
                    <img src={photo.thumbnailUrl} alt={photo.url} 
                    onClick={() => this.setState({photoId: photo.id})} />
                    {this.state.photoId === photo.id && (
                      <figcaption>{photo.title}</figcaption>
                    )}
                  </a>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
