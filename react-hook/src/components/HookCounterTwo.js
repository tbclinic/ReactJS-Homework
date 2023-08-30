import { useState } from "react";
import { Button } from "@nextui-org/react";

export default function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div align="center">
      Count: {count} <br />
      <Button size="lg" color="primary" onClick={() => setCount(initialCount)}>
        Reset
      </Button>
      {"      "}
      <Button
        size="lg"
        color="primary"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </Button>
      {"      "}
      <Button
        size="lg"
        color="primary"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        Decrement
      </Button>
      {"      "}
      <Button size="lg" color="primary" onClick={incrementFive}>
        Increment 5
      </Button>
    </div>
  );
}
