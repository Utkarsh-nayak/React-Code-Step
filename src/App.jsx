import { useState } from "react";
// import "./App.css";
import Collage from "./Collage";
import Student from "./Student";
import Wrapper from "./Wrapper";
import Skills from "./Skills";
import RadioDropDown from "./RadioDropDown";
import LoopArr from "./LoopArr";
import UseeffectHook from "./UseeffectHook";
import InlineStyle from "./InlineStyle";
import FocusName from "./FocusName";
import UpdtingObj from "./UpdtingObj";
import UpdatingArr from "./updatingArr";
import Counter from "./Counter";
import CollageData from "./CollageData";
import { SubjectContext } from "./ContextData";

function App() {
  // let clgList = ["IIT", "UIT", "DU"];

  // const [student, setStudent] = useState("");
  // const [val, setVal] = useState("utkarsh");
  const [subject, setSubject] = useState("");
  return (
    <div style={{ background: "#155263", padding: "10px" }}>
      <h1>app</h1>
      {/* {student && <Student name={student} />}
      <button
        onClick={() => {
          setStudent("utkarsh");
        }}
      >
        Click me{" "}
      </button>
      <h1>Vite + React</h1>
      <Collage clg={clgList} />
      <Wrapper>
        <h1>hello everyone</h1>
      </Wrapper>
      <Wrapper color={"pink"}>
        <h1>hello everyone</h1>
      </Wrapper>
      <Wrapper color={"red"}>
        <h1>hello everyone</h1>
      </Wrapper> */}

      {/* <h1>Get Input Field Value</h1>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} placeholder="enter your name"  />
      <label htmlFor="name" id="name"></label>
      <h1>{val}</h1>
      <button onClick={()=>setVal("")}>clear</button> */}
      {/* <Skills/> */}
      {/* <RadioDropDown/> */}
      {/* <LoopArr/> */}
      {/* <UseeffectHook/> */}
      {/* <InlineStyle/> */}
      {/* <FocusName/> */}
      {/* <UpdtingObj/> */}
      {/* <UpdatingArr/> */}
      {/* <Counter /> */}
      <SubjectContext.Provider value={subject}>
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="Sst">Sst</option>
          <option value="English">English</option>
        </select>
        <br />
        <br />
        <button onClick={() => setSubject("")}> CLEAR</button>
        <CollageData />
      </SubjectContext.Provider>
    </div>
  );
}

export default App;
