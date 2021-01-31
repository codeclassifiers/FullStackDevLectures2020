import "./DisplayStudentsName.css";
// Child Component
export function DisplayStudentsName(props) {
  // console.log("The prop value passed from parent component: ", props);
  return (
    <div className="student-card">
      <div>Student's name is {props.studentName}</div>
      <div>Batch month is November</div>
    </div>
  );
}
