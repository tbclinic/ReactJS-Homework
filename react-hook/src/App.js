import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import ClassRender from "./components/ClassRender";
function App() {
  return (
    <NextUIProvider>
      <ClassRender />
    </NextUIProvider>
  );
}

export default App;
