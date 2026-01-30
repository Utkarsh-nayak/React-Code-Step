import { useState } from "react";
function Skills() {
  const [skill,setskill]=useState([])
  const handleSkills=(event)=>{
    console.log(event.target.value,event.target.checked)
    if(event.target.checked){
      setskill([...skill,event.target.value])
    }else{
      setskill([...skill.filter((item)=>item!=event.target.value)])
    }

  }
  return (
    <>
      <h1>YOUR SKILLS</h1>
      <input onChange={handleSkills} type="checkbox" id="php" value="php" />
      <label htmlFor="php">PHP</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id="java" value="java" />
      <label htmlFor="java">JAVA</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id="node" value="node" />
      <label htmlFor="node">NODE</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id="react" value="react" />
      <label htmlFor="react">REACT</label>
      <br />
      <br />
      <h1>{skill.toString()}</h1>
    </>
  );
}

export default Skills;
