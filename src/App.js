import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if(process.env.REACT_APP_NODE_ENV==="production"){
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/users`)
      .then((data) => {
        return data.json();
      })
      .then((dbUsers) => {
        console.log(dbUsers.users);
        setUsers([...dbUsers.users]);
      });
    }
  }, []);

  return (
    <>
      <h1>mern stack aws deployment</h1>
      {users.length!==0 && users.map((u) => (
        <div>
          <p>{u?.user_name}</p>
          <p>{u?.user_email}</p>
          <p>{u?.user_contact}</p>
          <hr/>
        </div>
      ))}
    </>
  );
}

export default App;
