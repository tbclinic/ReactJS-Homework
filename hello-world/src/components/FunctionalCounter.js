import { useState } from "react";

export default function FunctionalCounter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter value: {counter} </h1>
      <>
        <button onClick={increment}>Increment</button>
      </>
      <>
        <button onClick={decrement}>Decrement</button>
      </>
    </>
  );
}
