import React, { useState, useEffect } from 'react';

function App3(prop) {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(function () {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await data.json();
    setUsers(response);
  };
  //Async In UseEffect

  const listUser = users.map((user) => <h5>{user.name}</h5>);
  //Store JSX in Val
  return (
    <div>
      <h1>{prop.title}</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
      {listUser}
    </div>
  );
}

export default App3;
