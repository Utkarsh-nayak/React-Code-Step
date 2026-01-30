import React from "react";
import User from "./User";

function LoopArr() {
  let Student = [
    { id: 12, name: "utkarsh", age: 28, gmail: "utk@gmail.com" },
    { id: 13, name: "ravi", age: 33, gmail: "ravi@gmail.com" },
    { id: 14, name: "rahul", age: 30, gmail: "rhul@gmail.com" },
    { id: 15, name: "nikhil", age: 27, gmail: "nkil@gmail.com" },
  ];
  return (
    <div>
      <h1>Reuse Component in Loop</h1>
      {Student.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </div>
  );
}

export default LoopArr;
