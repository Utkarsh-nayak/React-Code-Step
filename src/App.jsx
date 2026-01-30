import { useState } from "react";
import "./App.css";
import Collage from "./Collage";
import Student from "./Student";
import Wrapper from "./Wrapper";
import Skills from "./Skills";
import RadioDropDown from "./RadioDropDown";
import LoopArr from "./LoopArr";

function App() {
  let clgList = ["IIT", "UIT", "DU"];

  const [student, setStudent] = useState("");
  const[val,setVal]=useState("utkarsh");
  return (
    <>
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
      <LoopArr/>
    </>
  ); 
}

export default App;
