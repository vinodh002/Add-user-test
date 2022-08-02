import AddUser from "./components/AddUser";
import { useState } from "react";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    console.log(user);
    setUsers((prev) => [...prev, user]);
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
