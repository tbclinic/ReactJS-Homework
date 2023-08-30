import { useState } from "react";
import { Input } from "@nextui-org/react";

export default function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div className="flex w-half flex-wrap md:flex-nowrap gap-4">
      <Input
        type="text"
        label="First Name"
        placeholder="John"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <Input
        type="text"
        label="Last Name"
        placeholder="Smith"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}
