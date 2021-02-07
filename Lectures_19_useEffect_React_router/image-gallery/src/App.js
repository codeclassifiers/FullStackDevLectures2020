import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [imagesRendered, updateImagesRendered] = useState([]);
  function renderImages(responseData) {
    // console.log("Data passed", responseData);
    const imagesArray = responseData.map((imageObject) => {
      console.log(imageObject);
      const imageUrl = imageObject.download_url;
      return (
        <div>
          <img src={imageUrl} width="200" />
        </div>
      );
    });
    updateImagesRendered(imagesArray);
  }
  async function getData() {
    const response = await axios.get("https://picsum.photos/v2/list");
    // // console.log(response.data);
    renderImages(response.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return <div className="App">{imagesRendered}</div>;
}

export default App;
