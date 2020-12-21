import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SinglePhoto(props) {
  const [photo, setPhoto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const picture = props.photos.find((photo) => photo.id == id);
    setPhoto(picture);
  }, [id, props.photos]);

  return (
    <div style={{ marginLeft: "50%", transform: "translateX(-50%)" }}>
      {photo && (
        <>
          <img src={photo.url} alt={photo.title} />
          <h2>{photo.title}</h2>
        </>
      )}
    </div>
  );
}
