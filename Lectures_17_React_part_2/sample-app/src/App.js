import "./App.css";
import { DisplayClassInformation } from "./components/DisplayClassInformation";
import { DisplayStudentsName } from "./components/DisplayStudentsName";
function App() {
  return (
    <div className="App">
      <DisplayClassInformation topicOfClass="MERN stack" />
      <div className="student-info">
        <DisplayStudentsName studentName="Sudhanshu" />
        <DisplayStudentsName studentName="Meet" />
        <DisplayStudentsName studentName="Sakshi" />
      </div>
    </div>
  );
}

export default App;
