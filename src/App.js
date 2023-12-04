import Card from "./assets/Card";
import { useState } from "react";
function App() {
  const [users, setUsers] = useState([
    {
      name: 'feruz',
      age: 21,
      password: 1234,
    },
    {
      name: 'islom',
      age: 21,
      password: 1234,
    },
    {
      name: 'ixlomjon',
      age: 21,
      password: 1234,
    }
  ]);
  return (
    <div className="App">
    <table border={1} cellSpacing={0}>
    <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Password</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
      {
        users.map((val,ind) =>(
          <tr key={ind}>
            <td>{val.name}</td>
            <td>{val.age}</td>
            <td>{val.password}</td>
          </tr>
        ))
      }
    </tbody>
    </table>

    </div>
  );
}

