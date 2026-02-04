import React from "react";

import StudentContext from "./StudentContext";

const ClassComponent = () => {
  return (
    <div style={{ background: "#ff9a3c", padding: "10px" }}>
      <h1>ClassComponent</h1>
      <StudentContext />
    </div>
  );
};

export default ClassComponent;
