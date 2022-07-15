import React, { useState } from "react";
import classes from "./ImageUploader.module.css";
import image from "../assets/img/image.svg";

const ImageUploader = () => {
  const [images, setImages] = useState({});

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h1 className={classes.title}>Upload your image</h1>
        <p className={classes.subtitle}>File should be Jpeg, Png,...</p>
        <label htmlFor="dropZone"className={classes.dropZone}>
            <img src={image} alt="" />
            <p>Drag & Drop your image here</p>
            <input type="file" id="dropZone" />
        </label>
        <p>or</p>

        <label htmlFor="chooseFile" className={classes.chooseFileLabel}>
          Choose a file <input type="file" id="chooseFile" />
        </label>
      </form>
    </div>
  );
};

export default ImageUploader;
