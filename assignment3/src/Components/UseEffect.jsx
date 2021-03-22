import { useState, useEffect } from "react";
import "../styles/UseEffect.css";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async/await
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      console.log(users);
      setUsers(users);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>UseEffect</h1>
      <div className="tina">
        {users.map((user, i) => (
          <div key={i} className="cards">
            <h5>
              <strong>Name:</strong> {user.name}
            </h5>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Phone Number:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
            <div className="break">
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffect;
