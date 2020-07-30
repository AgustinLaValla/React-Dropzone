import React, { useCallback, useState, useEffect } from "react";
import cuid from "cuid";
import "./styles.css";
import { Dropzone } from "./Components/Dropzone";
import { ImageList } from "./Components/Image";

export default function App() {
  const [images, setImages] = useState([]);

  const onDrop = useCallback(acceptedFile => {
    acceptedFile.map(file => {
      const reader = new FileReader();
      reader.onload = e => {
        setImages(prevState => [
          ...prevState,
          { id: cuid(), src: e.target.result }
        ]);
      };

      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  useEffect(() => console.log(images), [images]);

  return (
    <main className="App">
      <h2>Drag and Drop</h2>
      <Dropzone onDrop={onDrop} accept={"image/*"} />
      <ImageList images={images} />
    </main>
  );
}
