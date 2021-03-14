import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [studentData, updateStudentDetails] = useState([]);
  async function fetchStudentDetails(params) {
    const studentDetails = await axios.get(
      "<Heroku-server-url-to-be-added-here>"
    );
    const studentsArray = studentDetails.data.results;
    const studentsUIObject = studentsArray.map((item) => {
      return (
        <div>
          <div>{item.name}</div>
          <div>{item.rollNo}</div>
          <div>{item.branch}</div>
        </div>
      );
    });
    console.log(studentDetails.data.results);
    updateStudentDetails(studentsUIObject);
  }
  useEffect(() => {
    fetchStudentDetails();
  }, []);
  return (
    <div className="App">
      <header className="App-header">{studentData}</header>
    </div>
  );
}

export default App;
