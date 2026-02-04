import React from "react";
import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }
  return [Increment, Decrement, count];
}

export default useCounter;
