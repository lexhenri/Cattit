import React, { useState } from "react";
import { HideUntilLoaded } from 'react-animation'
import TempSpin from '../../../app/assets/images/temp_spin.png';


export const ImagePostForm = props => {

  let imgPreview;
  if (props.file) {
    imgPreview = <img src={props.file} alt='' />;
  }

  let speed = 10;

  return (
    <div className="post-body-container">
      <div className="upload-image">
        <div>
          <HideUntilLoaded 
            imageToLoad={props.file} 
            Spinner={() => 
            <img style={{ animation: `spin ${speed}s linear infinite` }} src={TempSpin} alt="img" />}
            >
          {imgPreview}
          </HideUntilLoaded>
        </div>
        <input
          type="file"
          onChange={props.handleFile}
          className="inputfile"
          name="file" 
          id="file"
        />
        
          {
          (props.file) ? (<label htmlFor="file">change photo</label>) 
          : (<label htmlFor="file">upload</label>)
          }
         
      </div>
    </div>
  )
}




  // const[pictures, setPictures] = useState([]);

  // const onDrop = picture => {
  //   setPictures([...pictures, picture]);
  // };

  // console.log(pictures);

  // return(
  //   <div className="post-body-container">
  //     <div className="upload-image">
  //   <ImageUploader
  //     { ...props }
  //     withIcon ={ false }
  //     withLabel={ false }
  //     singleImage={ true }
  //     buttonText='select image'
  //     withPreview={ true }
  //     onChange = { onDrop }
  //     imgExtension = { [".jpg", ".gif", ".png", ".gif"]}
  //     maxFileSize = { 5242880 }
  //     />
  //     </div>
  //   </div>
  // );
;


export default ImagePostForm;