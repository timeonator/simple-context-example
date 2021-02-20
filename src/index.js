import { StrictMode, createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const UsersContext = createContext();

var users = [
  { id: 0, name: "Big John" },
  { id: 1, name: "Little John" },
  { id: 2, name: "Johnny B Goode" },
  { id: 3, name: "whoa Johnny" }
];

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <UsersContext.Provider value={users}>
      <App />
    </UsersContext.Provider>
  </StrictMode>,
  rootElement
);
