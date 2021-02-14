import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [imagesRendered, updateImagesRendered] = useState([]);
  function renderImages(responseData) {
    // console.log("Data passed", responseData);
    const imagesArray = responseData.map((imageObject) => {
      // console.log(imageObject);
      const imageUrl = imageObject.download_url;
      return (
        <div className="col-sm-12 col-md-4 col-lg-3 my-4">
          <img src={imageUrl} width="200" />
        </div>
      );
    });
    updateImagesRendered(imagesArray);
  }
  async function getData() {
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data);
    renderImages(response.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className="title text-center">
        <h1>Image Gallery</h1>
      </div>
      <div className="row">{imagesRendered}</div>
    </div>
  );
}

export default App;
