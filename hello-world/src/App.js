import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import Resume from "./components/Resume";
import FunctionEvent from "./components/FunctionEvent";
import ClassEvent from "./components/ClassEvent";
import FunctionalCounter from "./components/FunctionalCounter";
import ConditionalComponent from "./components/ConditionalComponent";
import Product from "./components/Product";
import Form from "./components/Form";
import Todo from "./components/Todo";
import InlineComponent from "./components/InlineCompoent";
import StyleSheetComponent from "./components/StyleSheetComponent";
import ModuleComponent from "./components/ModuleComponent";

function App() {
  return (
    <div className="App">
      {/* <Profile name="Userbot" lastName = "Shima">
        <h3>This is a profile of a person</h3>
      </Profile> */}

      {/* <Message messagecode="10" messagecontent="This is a message from props" /> */}

      {/* <Resume name="Userbot"/> */}

      {/* <FunctionEvent /> <br/><br/><br/>
      <ClassEvent /> */}
      {/* <Counter /> */}
      {/* <FunctionalCounter /> */}
      {/* <ConditionalComponent /> */}
      {/* <Product /> */}
      {/* <Form /> */}

      <InlineComponent />
      <StyleSheetComponent />
      <ModuleComponent />
      <Todo />
    </div>
  );
}

export default App;
