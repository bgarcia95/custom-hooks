import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./10-useContext/context/UserProvider";

// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memos/Memorize";
// import { MemoHook } from "./06-memos/MemoHook";
// import { CallbackHook } from "./07-useCallback/CallbackHook";
// import { Padre } from "./08-tarea-memo/Padre";
// import { TodoApp } from "./09-useReducer/TodoApp";
import { MainApp } from "./10-useContext/MainApp";

// import './09-useReducer/intro-reducer';

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <UserProvider>
      <MainApp />
    </UserProvider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
