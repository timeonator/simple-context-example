import "./styles.css";
import { UsersContext } from "./";
import { useContext } from "react";

export default function App() {
  const values = useContext(UsersContext);
  console.log(values);

  return (
    <div className="App">
      <h3>Users</h3>
      <ul>
        {values.map((v) => (
          <li key={v.id}>{v.name}</li>
        ))}
      </ul>
    </div>
  );
}
