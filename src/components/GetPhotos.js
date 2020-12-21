import React from "react";
import { Link } from "react-router-dom";

export default class GetPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photoId: null,
    };
  }

  handleClick(event, photo) {
    event.preventDefault();
    return this.setState({ photoId: photo.id });
  }

  render() {
    return (
      <div
        className="container"
        style={{
          justifyContent: "center",
          marginTop: "150px",
          display: "flex",
        }}
      >
        <div className="row">
          <div style={{ Width: "100vw", margin: "7px" }}>
            {this.props.photos.map((photo, index) => {
              return (
                <Link to={`/photo/${photo.id}`} key={photo.id}>
                  <div
                    style={{
                      Width: "20%",
                      margin: "8px",
                      height: "auto",
                      display: "inline-block",
                      boxShadow: "5px 5px 5px black",
                    }}
                    key={index}
                    /* onClick={(event) => this.handleClick(event, photo)} */
                  >
                    {/* <a target="_parent" href={photo.url}> */}
                    <img src={photo.thumbnailUrl} alt={photo.url} />
                    {/* {this.state.photoId === photo.id && (
                        <figcaption>{photo.title}</figcaption>
                      )} */}
                    {/* </a> */}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
