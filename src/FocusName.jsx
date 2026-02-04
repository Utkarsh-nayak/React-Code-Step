import { useRef } from "react";

const FocusName = () => {
  const inputRef = useRef(null);
  const inputhandler = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder='enter name here..'
    inputRef.current.value='123'
  };
  return (
    <div>
      <h1>Use Of useRef</h1>
      <input ref={inputRef} type="text" placeholder="enter name "></input>
      <button onClick={inputhandler}>Focus On Input Field</button>
    </div>
  );
};

export default FocusName;
