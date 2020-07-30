import React from "react";
import { useDropzone } from "react-dropzone";

const getClassName = (className, isActive) =>
  !isActive ? className : `${className} ${className}-active`;

export const Dropzone = ({ onDrop, accept }) => {
  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });
  /* getRootProps: This element determines the width and height of the dropzone area */
  /* getInputProps: We can support click events along with drag events to get the files */
  /* isDragActive:  will be set if the files are dragged above the dropzone area.  Usefull to styling*/
  return (
    <div className={getClassName("dropzone", isDragActive)} {...getRootProps()}>
      <input
        className="dropzone-input"
        {...getInputProps({ multiple: false })}
      />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">Realize to drop the files here</p>
        ) : (
          <p className="dropzone-content">
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
      </div>
    </div>
  );
};
