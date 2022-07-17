import React, { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import UploadComplete from "./components/UploadComplete";
import Loading from "./components/Loading";
import Footer from "./components/Footer"

import axios from "axios";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [imageLink, setImageLink] = useState("");

  const uploadHandler = (e) => {
    const form = e.target;
    const formData = form.files;
    setIsLoading(true);
    axios
      .post("https://mhimageuploader.herokuapp.com/api/images", formData)
      .then((response) => {
        setImageLink(response.data.file_url);
      })
      .then(() => {
        setIsLoading((prev) => !prev);
        setUploadComplete((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      {!isLoading && !uploadComplete ? (
        <ImageUploader uploadHandler={uploadHandler} />
      ) : isLoading && !uploadComplete ? (
        <Loading />
      ) : (
        <UploadComplete imageLink={imageLink} />
      )}
      <Footer />
    </div>
  );
}

export default App;
