import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import ClassRender from "./components/ClassRender";
import HookCounterThree from "./components/HookCounterThree";
function App() {
  return (
    <NextUIProvider>
      {/* <ClassRender /> */}
      <HookCounterThree />
    </NextUIProvider>
  );
}

export default App;
