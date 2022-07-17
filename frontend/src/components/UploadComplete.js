import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import classes from "./UploadComplete.module.css";

const UploadComplete = (props) => {

    const copyLinkHandler = ()=>{ 
        const imageLink = document.getElementById("image_link");
        imageLink.select();
        document.execCommand('copy');
        alert("Link copied")
    }

  return (
    <div className={classes.container}>
      <div className={classes.checkmarkContainer}>
        <IoMdCheckmarkCircle />
      </div>
      <h1 className={classes.header}>Uploaded Successfuly!</h1>
      <img className={classes.image}src={props.imageLink} alt="" />
      <div className={classes.linkContainer}>
        <input id='image_link'value={props.imageLink} />
        <button type='button' onClick={copyLinkHandler} onTouch={copyLinkHandler}>Copy Link</button>
      </div>
    </div>
  );
};

export default UploadComplete;
