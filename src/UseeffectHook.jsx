import React, { useEffect, useState } from "react";

function UseeffectHook() {
  const [count, setCount] = useState(0);
  function callFun() {
    console.log("function Calling");
  }

  useEffect(() => {
    callFun();
  }, []);

  return (
    <div>
      <h1>UseeffectHook</h1>
      <button onClick={() => setCount(count + 1)}>Count:{count}</button>
    </div>
  );
}

export default UseeffectHook;
