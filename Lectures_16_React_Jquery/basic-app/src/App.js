import "./App.css";
import { useState } from "react";
// Functional Component
function App() {
  // state variable and function to update the state variable
  const [count, updateCount] = useState(4);
  const [userName, updateUserName] = useState("Joe");
  const [fruit, updateFruitName] = useState("apple");
  const [postStatus, updatePostStatus] = useState("uploading");
  function handleButtonClick() {
    updateCount(count * 2);
  }
  function handleUserButtonClick() {
    updateUserName("SuperMan");
  }
  function handleFruitValueClick() {
    updateFruitName("watermelon");
  }
  function handleCompleteUpload() {
    updatePostStatus("Image successfully uploaded");
  }
  return (
    <div>
      <div className="container">
        <p>The current value is {count}</p>
        <button onClick={handleButtonClick}>Update Value</button>
      </div>
      <div className="container">
        <p>The current user name is {userName}</p>
        <button onClick={handleUserButtonClick}>Update User Name</button>
      </div>
      <div className="container">
        <p>The current fruit is {fruit}</p>
        <button onClick={handleFruitValueClick}>Update Fruit Value</button>
      </div>
      <div>
        <div>
          <p>{postStatus}</p>
          <button onClick={handleCompleteUpload}>Update Complete</button>
        </div>
      </div>
      <footer className="footer">Footer text</footer>
    </div>
  );
}

export default App;
