import React, { useState } from "react";
import ImageUploader from 'react-images-upload';

const ImagePostForm = props => {

  const[pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };

  return(
    <div className="post-body-container">
      <div className="upload-image">
    <ImageUploader
      { ...props }
      withIcon ={ false }
      withLabel={ false }
      singleImage={ true }
      buttonText='select image'
      withPreview={ true }
      onChange = { onDrop }
      imgExtension = { [".jpg", ".gif", ".png", ".gif"]}
      maxFileSize = { 5242880 }
      />
      </div>
    </div>
  );
};


export default ImagePostForm;