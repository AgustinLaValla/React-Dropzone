import React from "react";

const Image = ({ image }) => {
  return (
    <img
      style={{ maxWidth: "200px", padding: "20px" }}
      alt={`img - ${image.id}`}
      src={image.src}
      className="file-img"
    />
  );
};

export const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map(image => (
        <Image key={`${image.id}-image`} image={image} />
      ))}
    </div>
  );
};
