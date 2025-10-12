import React from "react";
 
function Student(props) {
  return (
    <div>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>College:</strong> {props.college}</p>
    </div>
  );
}
export default Student;