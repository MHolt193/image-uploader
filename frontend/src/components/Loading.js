import React from "react";
import classes from './Loading.module.css'

const Loading = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Uploading...</h1>
      <span className={classes.loadingBar}>
        <span className={classes.progressBar}></span>
      </span>
    </div>
  );
};

export default Loading;