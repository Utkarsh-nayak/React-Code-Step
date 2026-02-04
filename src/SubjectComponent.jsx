import React, { useContext } from "react";
import { SubjectContext } from "./ContextData";

const SubjectComponent = () => {
  const subject = useContext(SubjectContext);
  return (
    <div style={{ background: "#e0ffcd", padding: "10px" }}>
      <h1>SubjectComponent:{subject}</h1>
    </div>
  );
};

export default SubjectComponent;
