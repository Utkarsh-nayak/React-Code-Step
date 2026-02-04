import React, { useState } from "react";
import useCounter from "./useCounter";

function Counter() {
  const [Increment, Decrement, count] = useCounter(0);
  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={Increment}>INCREMENT+</button>
      <button onClick={Decrement}>DECREMENT-</button>
    </div>
  );
}

export default Counter;
