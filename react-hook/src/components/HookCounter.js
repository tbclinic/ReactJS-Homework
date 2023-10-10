import { useState } from "react";
import { Button } from "@nextui-org/react";

export default function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div align='center'>
      <Button size='lg' color='primary' onClick={() => setCount(count + 1)}>
        Count {count}
      </Button>
    </div>
  );
}
