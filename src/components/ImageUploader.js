import React from "react";
import classes from "./ImageUploader.module.css";
import image from "../assets/img/image.svg";

const ImageUploader = (props) => {
  

  return (
    <div className={classes.container}>
      <form className={classes.form} onChange={props.uploadHandler} enctype="multipart/form-data" >
        <h1 className={classes.title}>Upload your image</h1>
        <p className={classes.subtitle}>File should be Jpeg, Png,...</p>
        <label htmlFor="dropZone"className={classes.dropZone}>
            <img src={image} alt="" />
            <p>Drag & Drop your image here</p>
            <input type="file" id="dropZone" name="files"/>
        </label>
        <p className={classes.or}>Or</p>

        <label htmlFor="dropZone" className={classes.chooseFileLabel}>
          Choose a file 
        </label>
      </form>
    </div>
  );
};

export default ImageUploader;
