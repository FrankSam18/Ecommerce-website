import { useState } from "react";
import "./App.css";
import Router from "./Router/Router";
import AppContextProvider from "./AppContext";

function App() {
  const [count, setCount] = useState(0);
  return (<AppContextProvider>
    <Router />
    </AppContextProvider>)
}

export default App;